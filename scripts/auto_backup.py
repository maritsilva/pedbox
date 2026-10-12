#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PedBox Auto-Backup System
Cria backups compactados (.zip) da aplicação na máquina local a cada 5 patches (commits).
Pode ser acionado automaticamente via Git Hook (post-commit) ou manualmente via:
  python scripts/auto_backup.py [--force]
  npm run backup
"""

import os
import sys
import json
import time
import zipfile
import subprocess
from datetime import datetime

PEDBOX_ROOT = r'c:\pedbox'
SRC_DIR = os.path.join(PEDBOX_ROOT, 'src')
DOCS_DIR = os.path.join(PEDBOX_ROOT, 'docs')
BACKUP_DIR = os.path.join(PEDBOX_ROOT, 'backups')
TRACKER_FILE = os.path.join(BACKUP_DIR, '.backup_tracker.json')
INDEX_FILE = os.path.join(BACKUP_DIR, 'INDEX.md')
BACKUP_INTERVAL = 5

EXCLUDED_DIRS = {
    'node_modules',
    '.git',
    'dist',
    'dist-ssr',
    '.data',
    '.agents',
    'playwright-report',
    'test-results',
    '.vite',
    'coverage'
}

EXCLUDED_FILES = {
    '.DS_Store',
    'thumbs.db'
}

def run_git(cmd, cwd=SRC_DIR):
    try:
        res = subprocess.run(
            ['git'] + cmd,
            cwd=cwd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=True
        )
        return res.stdout.strip()
    except Exception as e:
        return None

def get_git_info():
    commit_count_str = run_git(['rev-list', '--count', 'HEAD'])
    commit_count = int(commit_count_str) if commit_count_str and commit_count_str.isdigit() else 0
    commit_hash = run_git(['rev-parse', '--short', 'HEAD']) or 'unknown'
    commit_full_hash = run_git(['rev-parse', 'HEAD']) or 'unknown'
    branch = run_git(['rev-parse', '--abbrev-ref', 'HEAD']) or 'main'
    commit_msg = run_git(['log', '-1', '--pretty=%s']) or 'Sem mensagem'
    return {
        'count': commit_count,
        'hash': commit_hash,
        'full_hash': commit_full_hash,
        'branch': branch,
        'message': commit_msg
    }

def load_tracker():
    if os.path.exists(TRACKER_FILE):
        try:
            with open(TRACKER_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            pass
    return {
        'lastBackupCommitCount': 0,
        'lastBackupCommitHash': '',
        'backupInterval': BACKUP_INTERVAL,
        'backups': []
    }

def save_tracker(tracker):
    os.makedirs(BACKUP_DIR, exist_ok=True)
    with open(TRACKER_FILE, 'w', encoding='utf-8') as f:
        json.dump(tracker, f, indent=2, ensure_ascii=False)

def update_index_md(tracker):
    os.makedirs(BACKUP_DIR, exist_ok=True)
    lines = [
        "# Registro de Backups Locais — PedBox",
        "",
        "> Sistema automatizado de backup a cada 5 patches/commits na máquina local.",
        "",
        f"**Diretório de Backups:** `{BACKUP_DIR}`  ",
        f"**Regra:** Backup completo (.zip) gerado a cada {BACKUP_INTERVAL} patches ou sob demanda (`npm run backup`).  ",
        f"**Total de backups armazenados:** {len(tracker.get('backups', []))}",
        "",
        "## Histórico de Backups",
        "",
        "| Data / Hora | Patch # | Commit | Mensagem do Commit | Arquivo | Tamanho |",
        "| :--- | :---: | :---: | :--- | :--- | :---: |"
    ]
    
    # Exibir do mais recente para o mais antigo
    for b in reversed(tracker.get('backups', [])):
        dt_str = b.get('timestamp_readable', b.get('timestamp', ''))
        cnt = b.get('commitCount', 0)
        hsh = b.get('commitHash', '')
        msg = b.get('commitMessage', '').replace('|', '-')
        if len(msg) > 50:
            msg = msg[:47] + '...'
        fname = b.get('filename', '')
        size_mb = b.get('sizeMB', 0.0)
        lines.append(f"| {dt_str} | **#{cnt}** | `{hsh}` | {msg} | `{fname}` | {size_mb:.2f} MB |")

    lines.append("")
    lines.append("---")
    lines.append("*Gerado automaticamente pelo script `src/scripts/auto_backup.py`.*")
    lines.append("")

    with open(INDEX_FILE, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))

def create_backup(git_info, force=False):
    os.makedirs(BACKUP_DIR, exist_ok=True)
    now = datetime.now()
    ts_file = now.strftime('%Y%m%d_%H%M%S')
    ts_readable = now.strftime('%d/%m/%Y %H:%M:%S')

    archive_name = f"pedbox_backup_patch_{git_info['count']}_{git_info['hash']}_{ts_file}.zip"
    archive_path = os.path.join(BACKUP_DIR, archive_name)

    print(f"\n[PedBox Backup] Criando backup compactado...")
    print(f" -> Destino: {archive_path}")

    manifest = {
        'projectName': 'PedBox',
        'backupDate': ts_readable,
        'timestamp': now.isoformat(),
        'git': git_info,
        'backupInterval': BACKUP_INTERVAL,
        'forced': force,
        'includedDirs': ['src', 'docs']
    }

    t0 = time.time()
    file_count = 0

    with zipfile.ZipFile(archive_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        # 1. Adicionar src/
        if os.path.exists(SRC_DIR):
            for root, dirs, files in os.walk(SRC_DIR):
                dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS and not d.endswith('.log')]
                for f in files:
                    if f in EXCLUDED_FILES or f.endswith('.log') or f.endswith('.tmp'):
                        continue
                    full_p = os.path.join(root, f)
                    rel_p = os.path.relpath(full_p, PEDBOX_ROOT)
                    zf.write(full_p, rel_p)
                    file_count += 1

        # 2. Adicionar docs/ se existir
        if os.path.exists(DOCS_DIR):
            for root, dirs, files in os.walk(DOCS_DIR):
                dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS]
                for f in files:
                    if f in EXCLUDED_FILES:
                        continue
                    full_p = os.path.join(root, f)
                    rel_p = os.path.relpath(full_p, PEDBOX_ROOT)
                    zf.write(full_p, rel_p)
                    file_count += 1

        # 3. Adicionar manifest.json no root do zip
        manifest['totalFiles'] = file_count
        zf.writestr('BACKUP_MANIFEST.json', json.dumps(manifest, indent=2, ensure_ascii=False))

    duration = time.time() - t0
    size_bytes = os.path.getsize(archive_path)
    size_mb = size_bytes / (1024 * 1024)

    # Atualizar Tracker e Index
    tracker = load_tracker()
    tracker['lastBackupCommitCount'] = git_info['count']
    tracker['lastBackupCommitHash'] = git_info['hash']
    tracker['lastBackupDate'] = ts_readable

    backup_record = {
        'filename': archive_name,
        'path': archive_path,
        'timestamp': now.isoformat(),
        'timestamp_readable': ts_readable,
        'commitCount': git_info['count'],
        'commitHash': git_info['hash'],
        'commitMessage': git_info['message'],
        'branch': git_info['branch'],
        'sizeBytes': size_bytes,
        'sizeMB': round(size_mb, 2),
        'filesCount': file_count,
        'durationSeconds': round(duration, 2)
    }
    tracker['backups'].append(backup_record)
    save_tracker(tracker)
    update_index_md(tracker)

    print(f"\n========================================================")
    print(f" [PedBox Backup] Backup local gerado com sucesso!")
    print(f"========================================================")
    print(f" Arquivo:       {archive_name}")
    print(f" Local:         {archive_path}")
    print(f" Patch / Commit: #{git_info['count']} ({git_info['hash']})")
    print(f" Mensagem:      {git_info['message']}")
    print(f" Arquivos:      {file_count} arquivos em {duration:.2f}s")
    print(f" Tamanho:       {size_mb:.2f} MB")
    print(f" Índice:        {INDEX_FILE}")
    print(f"========================================================\n")
    return archive_path

def main():
    force = '--force' in sys.argv or '-f' in sys.argv
    git_info = get_git_info()
    tracker = load_tracker()

    last_count = tracker.get('lastBackupCommitCount', 0)
    curr_count = git_info['count']
    diff = curr_count - last_count

    print(f"[PedBox Backup] Verificando status dos patches:")
    print(f" -> Patch atual: #{curr_count} ({git_info['hash']})")
    print(f" -> Último backup no patch: #{last_count}")
    print(f" -> Patches desde o último backup: {diff} (limiar: a cada {BACKUP_INTERVAL} patches)")

    if force:
        print("[PedBox Backup] Parâmetro --force detectado. Executando backup imediato...")
        create_backup(git_info, force=True)
    elif diff >= BACKUP_INTERVAL or last_count == 0:
        print(f"[PedBox Backup] Limiar de {BACKUP_INTERVAL} patches atingido! Iniciando backup...")
        create_backup(git_info, force=False)
    else:
        remaining = BACKUP_INTERVAL - diff
        print(f"[PedBox Backup] Backup não necessário no momento. Faltam {remaining} patch(es) para o próximo backup automático.")

if __name__ == '__main__':
    main()
