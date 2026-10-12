# PedBox 🩺

> **Plataforma médica de referência e apoio à tomada de decisão clínica em Pediatria e Neonatologia.**  
> Disponível ao vivo em: **[https://pedbox.app](https://pedbox.app)**

---

## 📌 Visão Geral

O **PedBox** é um ecossistema clínico desenvolvido para médicos pediatras, residentes e profissionais de saúde. A plataforma reúne ferramentas de cálculo de alta precisão, diretrizes de conduta rápida à beira do leito, guia farmacológico com alertas de segurança e curvas antropométricas oficiais em uma interface veloz, responsiva e pronta para uso em plantões.

---

## 🚀 Principais Recursos e Módulos

### 1. Diretrizes e Condutas Clínicas (148 Tópicos Completos)
Textos clínicos detalhados e estruturados com esquemas visuais originais, tabelas e condutas baseadas em consensos oficiais (SBP, Ministério da Saúde, AAP e OMS):
* **Neonatologia (29 condutas):** Cuidados imediatos no parto, reanimação neonatal, sepse neonatal, icterícia e fototerapia, TORCHS, enterocolite necrosante e distúrbios respiratórios/metabólicos do RN.
* **Cirurgia Pediátrica (30 condutas):** Abdome agudo na infância, apendicite, estenose hipertrófica de piloro, hérnias, atresia de esôfago, defeitos de parede abdominal e urologia pediátrica.
* **Urgências e Emergências (22 condutas):** Choque séptico/hipovolêmico, PCR pediátrica (PALS 2025), estado de mal epiléptico, cetoacidose diabética (CAD), insuficiência respiratória e via aérea avançada.
* **Puericultura e Desenvolvimento (28 condutas):** Alimentação complementar, marcos do desenvolvimento, rastreio visual e auditivo, triagens neonatais e suporte vacinal.
* **Doenças Respiratórias (23 condutas):** Asma aguda, crupe viral (laringite), bronquiolite viral aguda, pneumonia adquirida na comunidade (PAC), derrame pleural e aspiração de corpo estranho.
* **Hematologia Pediátrica (16 condutas):** Anemia ferropriva e megaloblástica, doença falciforme e crises vaso-oclusivas, coagulopatias (Fator VII, XIII, von Willebrand), PTI, anticoagulação e neutropenia febril.

---

### 2. Calculadoras e Escores Validados (47 Ferramentas)
* **Controle da Asma:** Classificação GINA 2026 (<6 anos e ≥6 anos) e escore PAS (Pediatric Asthma Score).
* **Avaliação Neonatal e Gestacional:** APGAR, Silverman-Andersen, Idade Gestacional (DUM/USG), Idade Gestacional Corrigida para prematuros, Capurro Somatoneurológico e New Ballard Score.
* **Gravidade e Triagem:** PEWS (Pediatric Early Warning Score), SIPA (Shock Index Pediatric Adjusted), Glasgow Pediátrico e Escore de Rodwell para sepse neonatal.
* **Equilíbrio Hidroeletrolítico:** Hidratação venosa de manutenção e reposição pelo método de Holliday-Segar com cálculo rigoroso de sódio e potássio.
* **Diagnóstico e Infecções:** Centor-McIsaac para faringoamigdalite bacteriana, Roma IV para constipação funcional e Wood-Downes modificado para bronquiolite.

---

### 3. Guia Farmacológico e Segurança do Paciente (500+ Fórmulas)
* **Doses Pediátricas por Peso:** Cálculo imediato de dose terapêutica (mg/kg/dia ou mg/kg/dose) com checagem automática e travamento de dose máxima diária.
* **Ajuste por Faixa Etária:** Separação estrita de intervalos posológicos para neonatos prematuros, a termo, lactentes e crianças maiores.
* **Drogas de Emergência:** Tabela de infusão contínua, vasopressores, inotrópicos, anticonvulsivantes e sedativos.

---

### 4. Curvas Antropométricas Oficiais
* **Padrão OMS (0 a 5 anos):** Peso, Estatura, IMC e Perímetro Cefálico com projeção de escores-z (-3 a +3) e percentis.
* **Padrão CDC (2 a 20 anos):** Implementação baseada nos coeficientes oficiais LMS, sem arredondamento prematuro de dados e com suporte a percentis estendidos para obesidade severa.

---

### 5. Puericultura, Vacinas e Amamentação
* **Segurança na Lactação (MS 2025):** Guia estruturado de compatibilidade medicamentosa na amamentação, categorizado em compatíveis, uso criterioso e contraindicados.
* **Calendário Vacinal 2026:** Esquemas cruzados PNI e SBIm com regras de transição (ex.: VPC20, esquema exclusivo de VIP aos 4 anos) e busca fonética tolerante a acentos.

---

## 💻 Stack Tecnológica e Arquitetura

* **Frontend:** React 18, Vite, Tailwind CSS, Radix UI, Framer Motion, Lucide Icons.
* **Backend:** Node.js (ESM nativo), Express, validação com schemas Zod, Rate Limiter e Helmet.
* **Banco de Dados:** PostgreSQL com migrações versionadas; persistência 100% segura no servidor (sem dependência de `localStorage` para dados sensíveis).
* **Testes Automatizados:** Suíte de 132 testes unitários (`node --test`) cobrindo todas as fórmulas clínicas, curvas de crescimento, dosagens e integridade editorial.
* **PWA & Cache:** Service Worker com suporte offline para consulta em ambientes hospitalares com conectividade instável.
* **Infraestrutura:** Docker, Nginx Proxy com HTTP/2, TLS 1.3 e Let's Encrypt.

---

## 🛠️ Execução Local

### Pré-requisitos
* Node.js 22 ou superior
* npm 10+
* Python 3.10+ (utilizado pelos scripts de backup e validação de datasets)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/maritsilva/pedbox.git
cd pedbox/src

# Instale as dependências
npm ci

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o ambiente de desenvolvimento (Frontend + API)
npm run dev
```

* **Frontend:** `http://localhost:5173`
* **API Backend:** `http://127.0.0.1:3001`

---

## 🧪 Qualidade, Linter e Testes

O projeto adota padrões rigorosos de integridade clínica e tipagem:

```bash
# Executa a suíte completa de testes unitários (132 testes)
npm test

# Executa o linter com regras estritas (zero erros permitidos)
npm run lint

# Compila o pacote de produção
npm run build
```

---

## 📦 Sistema de Backup Local

O projeto conta com um sistema de **backup automático a cada 5 patches (commits)**:
* **Gatilho:** Hook Git `post-commit` automático.
* **Destino:** Diretório `backups/` na raiz do projeto com manifesto JSON e registro em `INDEX.md`.

Para acionar manualmente:
```bash
# Verifica se o limiar foi atingido
npm run backup

# Força a geração de um backup imediato
npm run backup:force
```

---

## ⚠️ Aviso Legal e Responsabilidade Ética

O **PedBox** é uma ferramenta de apoio à decisão clínica e estudo médico voltada exclusivamente a estudantes de medicina, residentes e profissionais de saúde habilitados. **Não substitui o raciocínio clínico individual, a anamnese completa ou a consulta aos protocolos institucionais.** Toda prescrição, cálculo e conduta devem ser validados pelo médico responsável pelo paciente.

---

## 📬 Contato e Suporte

* **Plataforma:** [pedbox.app](https://pedbox.app)
* **E-mail de Contato:** [contato@pedbox.app](mailto:contato@pedbox.app)
