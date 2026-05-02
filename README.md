### PedBox 🩺 — A Caixa de Ferramentas da Pediatria

O **PedBox** é uma plataforma **vibe-coded**, **open-source** e **radicalmente colaborativa**, projetada para ser o "canivete suíço" do profissional de saúde que atua na pediatria. Nossa missão é clara: facilitar a tomada de decisão clínica através de ferramentas **precisas**, **rápidas** e, acima de tudo, **livres**.

Este projeto nasce da insatisfação com a **fragmentação do conhecimento médico** e as barreiras (financeiras e burocráticas) que cercam ferramentas essenciais. Acreditamos que, na saúde, **democratizar o acesso à informação** é uma extensão do ato de cuidar.

---

### 🕊️ Manifesto: Conhecimento Médico Livre

A ciência só avança quando o conhecimento circula **sem atritos**. Livros caros, assinaturas proibitivas e plataformas fechadas não protegem a qualidade — eles apenas a isolam. 

O **PedBox** é um projeto educacional e clínico construído sob os pilares da **Liberdade Radical**:
* **Acesso Universal:** Sem paywalls. O estudante da periferia e o especialista do grande centro usam a mesma ferramenta.
* **Transparência Total:** Código aberto significa que qualquer cálculo pode ser **auditado e validado** pela comunidade.
* **Antifrágil e Evolutivo:** Ao contrário de apps proprietários que morrem com seus donos, o **PedBox pertence à comunidade**. Se você vê um erro ou uma melhoria necessária, você tem o poder de mudar.

> "Conteúdo livre não é falta de rigor; é a coragem de ser revisado por todos para ser útil a qualquer um."

---

### 🛠️ O que o PedBox oferece?

O ecossistema é desenhado para ser **fluido e intuitivo**, focado em três frentes principais:

#### 1. Calculadoras Clínicas de Alta Precisão
Esqueça a regra de três no meio da emergência. Nossa biblioteca inclui:
* **Hidratação Venosa:** Cálculos de **Holiday-Segar** e protocolos de reposição hidroeletrolítica.
* **Antropometria Inteligente:** Interpretação automática de **escores-z e percentis** (Peso, Estatura, IMC e Perímetro Cefálico).
* **Nefro & Nutrição:** Cálculo de **Clearance de Creatinina** e balanço de macro/micronutrientes.

#### 2. Guia de Medicações & Segurança do Paciente
Focado na **redução de erros** de prescrição:
* **Doses por Peso:** Consulta instantânea de **mg/kg** com alertas de dose máxima.
* **Especificidade por Faixa Etária:** Diferenciação clara entre doses **neonatais e pediátricas**.
* **Diluição e Administração:** Instruções práticas para enfermagem e beira de leito.

#### 3. Repositório de Protocolos e "Vibe-Checks"
Recursos rápidos para consulta de **fluxogramas e condutas** baseadas nas evidências mais recentes, apresentados de forma visual e direta.

---

### 🚀 Começando

#### Instalação Local

Se você deseja contribuir com o código ou rodar sua própria instância:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/maritsilva/pedbox.git
   ```

   **Instale as dependências:**
   ```bash
   npm install
   ```

#### Configuração de Ambiente
Crie um arquivo `.env.local` na raiz do projeto e insira suas chaves do Base44:
```
VITE_BASE44_APP_ID=seu_app_id
VITE_BASE44_APP_BASE_URL=sua_url_do_backend
```

**Execução**
```bash
npm run dev
```

### 🤝 Faça parte do movimento
O PedBox é um organismo vivo. Sua participação é o que mantém o projeto atualizado e seguro:
* **Mantenha o projeto vivo:** Divulgue e utilize em sua prática.
* **Reporte & Sugira:** Encontrou um bug ou precisa de uma calculadora específica? Abra uma Issue.
* **Contribua com Código:** Pull Requests são sempre bem-vindos, desde melhorias na UI até novos algoritmos clínicos.
* **Revisão por Pares:** Ajude-nos a manter as dosagens de acordo com os protocolos mais recentes.

### 📚 Links Úteis
* **Acesse o App:** [pedbox.app](https://pedbox.app)
* **Engine de Desenvolvimento:** [Base44 Documentation](https://docs.base44.com/)

**PedBox:** Criado por quem cuida, para quem cuida. O conhecimento é o nosso melhor remédio.
