# Ecommerce Backend API

Este projeto é um backend completo para um sistema de ecommerce desenvolvido em Node.js, utilizando Express.js para as rotas, MongoDB Atlas para o banco de dados, Mongoose para modelagem, e Yup para validações. O sistema implementa 10 operações CRUD distintas para entidades relacionadas, atendendo aos requisitos do Trabalho Prático A2.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para criação de APIs REST.
- **MongoDB Atlas**: Banco de dados NoSQL na nuvem.
- **Mongoose**: ODM para modelagem de dados e relacionamentos.
- **Yup**: Biblioteca para validações de entrada.
- **JWT**: Para autenticação (se implementado).
- **Outros**: bcryptjs para hash de senhas, dotenv para variáveis de ambiente.

## Descrição do Projeto
A API gerencia um ecommerce com 10 entidades principais: Avaliações, Carrinho, Categorias, Clientes, Cupons, Fornecedores, Logística, Pagamentos, Pedidos e Produtos. Cada entidade possui operações CRUD completas (Create, Read, Update, Delete), com validações, relacionamentos entre collections e documentação via Postman. O projeto inclui autenticação básica, tratamento de erros e estrutura modular para escalabilidade.

## Lista de Endpoints
Abaixo, a lista completa de endpoints para as 10 entidades. Todos os endpoints retornam JSON e usam os códigos HTTP padrão.

### 1. Avaliações (`/api/avaliacoes`)
- **GET /api/avaliacoes**: Lista todas as avaliações.
- **GET /api/avaliacoes/:id**: Busca avaliação por ID.
- **POST /api/avaliacoes**: Cria nova avaliação (com validação Yup).
- **PUT /api/avaliacoes/:id**: Atualiza avaliação por ID.
- **DELETE /api/avaliacoes/:id**: Deleta avaliação por ID.

### 2. Carrinho (`/api/carrinho`)
- **GET /api/carrinho**: Lista todos os carrinhos.
- **GET /api/carrinho/:id**: Busca carrinho por ID.
- **POST /api/carrinho**: Cria novo carrinho (com validação Yup).
- **PUT /api/carrinho/:id**: Atualiza carrinho por ID.
- **DELETE /api/carrinho/:id**: Deleta carrinho por ID.

### 3. Categorias (`/api/categorias`)
- **GET /api/categorias**: Lista todas as categorias.
- **GET /api/categorias/:id**: Busca categoria por ID.
- **POST /api/categorias**: Cria nova categoria (com validação Yup).
- **PUT /api/categorias/:id**: Atualiza categoria por ID.
- **DELETE /api/categorias/:id**: Deleta categoria por ID.

### 4. Clientes (`/api/clientes`)
- **GET /api/clientes**: Lista todos os clientes.
- **GET /api/clientes/:id**: Busca cliente por ID.
- **POST /api/clientes**: Cria novo cliente (com validação Yup).
- **PUT /api/clientes/:id**: Atualiza cliente por ID.
- **DELETE /api/clientes/:id**: Deleta cliente por ID.

### 5. Cupons (`/api/cupons`)
- **GET /api/cupons**: Lista todos os cupons.
- **GET /api/cupons/:id**: Busca cupom por ID.
- **POST /api/cupons**: Cria novo cupom (com validação Yup).
- **PUT /api/cupons/:id**: Atualiza cupom por ID.
- **DELETE /api/cupons/:id**: Deleta cupom por ID.

### 6. Fornecedores (`/api/fornecedores`)
- **GET /api/fornecedores**: Lista todos os fornecedores.
- **GET /api/fornecedores/:id**: Busca fornecedor por ID.
- **POST /api/fornecedores**: Cria novo fornecedor (com validação Yup).
- **PUT /api/fornecedores/:id**: Atualiza fornecedor por ID.
- **DELETE /api/fornecedores/:id**: Deleta fornecedor por ID.

### 7. Logística (`/api/logistica`)
- **GET /api/logistica**: Lista todas as entradas de logística.
- **GET /api/logistica/:id**: Busca logística por ID.
- **POST /api/logistica**: Cria nova entrada de logística (com validação Yup).
- **PUT /api/logistica/:id**: Atualiza logística por ID.
- **DELETE /api/logistica/:id**: Deleta logística por ID.

### 8. Pagamentos (`/api/pagamentos`)
- **GET /api/pagamentos**: Lista todos os pagamentos.
- **GET /api/pagamentos/:id**: Busca pagamento por ID.
- **POST /api/pagamentos**: Cria novo pagamento (com validação Yup).
- **PUT /api/pagamentos/:id**: Atualiza pagamento por ID.
- **DELETE /api/pagamentos/:id**: Deleta pagamento por ID.

### 9. Pedidos (`/api/pedidos`)
- **GET /api/pedidos**: Lista todos os pedidos.
- **GET /api/pedidos/:id**: Busca pedido por ID.
- **POST /api/pedidos**: Cria novo pedido (com validação Yup).
- **PUT /api/pedidos/:id**: Atualiza pedido por ID.
- **DELETE /api/pedidos/:id**: Deleta pedido por ID.

### 10. Produtos (`/api/produtos`)
- **GET /api/produtos**: Lista todos os produtos.
- **GET /api/produtos/:id**: Busca produto por ID.
- **POST /api/produtos**: Cria novo produto (com validação Yup).
- **PUT /api/produtos/:id**: Atualiza produto por ID.
- **DELETE /api/produtos/:id**: Deleta produto por ID.

## Diagrama de Modelagem
O diagrama de modelagem das 10 collections e seus relacionamentos está disponível em `docs/diagrama.png`. Ele mostra as entidades, campos principais e referências (ex.: Produto -> Categoria, Pedido -> Cliente).

## Instalação e Execução
1. **Clone o repositório**: `git clone https://github.com/seu-usuario/ecommerce-backend.git`
2. **Instale as dependências**: `npm install`
3. **Configure o ambiente**: Crie um arquivo `.env` com as variáveis (ex.: `MONGO_URI=mongodb+srv://...`, `JWT_SECRET=...`)
4. **Execute o servidor**: `npm start` (porta padrão: 5000)
5. **Teste a API**: Use Postman com a collection exportada em `docs/ecommerce-api.postman_collection.json`

## Membros do Grupo e Contribuições
- **João Silva (Matrícula: 12345)**: Responsável pelos models de Avaliações, Carrinho e Categorias; contribuiu com validações Yup e diagrama.
- **Maria Oliveira (Matrícula: 67890)**: Responsável pelos models de Clientes, Cupons e Fornecedores; implementou controllers e rotas.
- **Carlos Santos (Matrícula: 54321)**: Responsável pelos models de Logística, Pagamentos e Pedidos; configurou MongoDB Atlas e autenticação.
- **Ana Costa (Matrícula: 09876)**: Responsável pelo model de Produtos; criou README, collection Postman e testes finais.
- **Pedro Lima (Matrícula: 13579)**: Coordenação geral, integração de rotas no server.js e revisão de código.

Este projeto foi desenvolvido colaborativamente via GitHub, com issues para cada CRUD e PRs para merges. Data de entrega: 21/11. Para dúvidas, entre em contato com os membros.