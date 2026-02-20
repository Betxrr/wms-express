# WMS Express - Controle de Docas

## ✨ Objetivo

Projeto Fullstack desenvolvido como vitrine técnica. Trata-se de um mini-WMS (Gestão de Armazém) criado para demonstrar proficiência na stack **Next.js + NestJS + PostgreSQL**. O foco é aplicar regras de negócio reais de logística (como prevenção de concorrência em docas ocupadas) usando código limpo, tipagem estática rigorosa e arquitetura modular.

## ⚙️ Tecnologias Principais

-   **Next.js & React:** Framework para a construção da interface do usuário com alta performance.
-   **TypeScript:** Tipagem estática rigorosa (Strict Mode) para garantir a integridade dos dados de ponta a ponta.
-   **Tailwind CSS:** Para estilização ágil e responsiva das dashboards.
-   **NestJS & Prisma ORM:** Construção de uma API robusta com Clean Architecture, injeção de dependência e validação de payload.
-   **PostgreSQL & Docker:** Banco de dados relacional rodando em ambiente isolado via container.

## 🚀 Planejamento (Roadmap)

### Fase 1: Configuração e Ambiente Linux
-   [x] Configurar ambiente no Ubuntu 24.04 (NVM, Docker sem sudo, Git).
-   [x] Criar o repositório base no GitHub.
-   [x] Iniciar o projeto Frontend com Next.js, TypeScript e Tailwind.

### Fase 2: Backend e Modelagem de Dados
-   [x] Inicializar o core do NestJS e Prisma.
-   [ ] **Container Docker:** Subir o banco de dados PostgreSQL.
-   [ ] **Prisma Schema:** Modelar as tabelas de Cargas e Docas com Constraints SQL de restrição.
-   [ ] **API NestJS:** Desenvolver as rotas REST isolando as regras de negócio em Services (Clean Architecture).

### Fase 3: Frontend e UI First
-   [ ] **Dashboard de Docas:** Desenvolver a grade visual para mostrar o status das docas (Disponível, Ocupada, Manutenção).
-   [ ] **Fluxo de Dados Fake:** Criar dados mockados internamente para validar a regra de negócio visualmente.
-   [ ] **Componentização:** Criar componentes reutilizáveis para os cards de docas.

### Fase 4: Integração Final
-   [ ] Conectar o Frontend com a API do NestJS.
-   [ ] Implementar validações rigorosas utilizando o Zod no tráfego de dados.

## 🛠️ Como Rodar o Projeto Localmente

Siga estes passos para ter uma cópia do projeto rodando na sua máquina local.

### Pré-requisitos
Certifique-se de que você tem o Node.js (v20+ via NVM recomendado), Docker e o Git instalados no seu sistema Ubuntu/Linux.

### Instalação e Execução

1.  Clone o repositório para sua máquina:
    ```bash
    git clone [https://github.com/Betxrr/wms-express.git](https://github.com/Betxrr/wms-express.git)
    cd wms-express
    ```

2.  Inicie o Banco de Dados via Docker (Na raiz do projeto):
    ```bash
    docker-compose up -d
    ```

3.  Execute o Backend (NestJS):
    ```bash
    cd backend
    npm install
    npx prisma generate
    npm run start:dev
    ```

4.  Execute o Frontend (Next.js) em outro terminal:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    > O Frontend estará disponível em `http://localhost:3000`
