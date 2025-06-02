# ReactGram

Aplicação backend em Node.js/Express para gerenciar autenticação de usuários, upload de arquivos e endpoints de API. Construída com ferramentas e bibliotecas modernas para desenvolvimento seguro, escalável e eficiente.
Front-end em React que utiliza Redux para gerenciamento de estado, React Router para navegação e ícones do React Icons para uma interface visualmente rica.

## Índice
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Funcionalidades
- Autenticação de usuários com JSON Web Tokens (JWT)
- Hash de senhas com bcryptjs
- Integração com MongoDB usando Mongoose
- Upload de arquivos com Multer
- Validação de entrada com express-validator
- Suporte a Cross-Origin Resource Sharing (CORS)
- Gerenciamento de variáveis de ambiente com dotenv
- API RESTful construída com Express

## Tecnologias
- **Node.js**: Ambiente de execução JavaScript para desenvolvimento backend
- **Express**: Framework web para construção de APIs
- **MongoDB & Mongoose**: Modelagem de objetos para MongoDB
- **jsonwebtoken**: Autenticação baseada em JWT
- **bcryptjs**: Hash de senhas para armazenamento seguro
- **express-validator**: Middleware para validação de requisições
- **multer**: Middleware para upload de arquivos
- **cors**: Habilita Cross-Origin Resource Sharing
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env`
- **reduxjs**: Simplifica o gerenciamento de estado com Redux.
- **react**: Biblioteca para construção de interfaces de usuário.
- **react-dom**: Manipulação do DOM com React.
- **react-icons**: Conjunto de ícones para componentes React.
- **react-redux**: Integração do Redux com React.
- **react-router-dom**: Gerenciamento de rotas na aplicação.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e configure suas variáveis de ambiente (veja [Configuração](#configuração)).

4. Inicie o servidor:
   ```bash
   npm start
   ```

   Ou, para desenvolvimento com reinicialização automática (requer `nodemon`):
   ```bash
   npm run dev
   ```

## Configuração
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
MONGODB_URI=sua_string_de_conexão_mongodb
JWT_SECRET=sua_chave_secreta_jwt
```

- **PORT**: Porta em que o servidor será executado (padrão: 3000).
- **MONGODB_URI**: String de conexão do MongoDB (ex.: `mongodb://localhost:27017/seu-banco`).
- **JWT_SECRET**: Chave secreta para assinar tokens JWT.

Certifique-se de adicionar o arquivo `.env` ao `.gitignore` para evitar a exposição de informações sensíveis.

## Uso
1. Inicie seu servidor MongoDB (se estiver rodando localmente).
2. Execute a aplicação:
   ```bash
   npm start
   ```
3. O servidor estará disponível em `http://localhost:3000` (ou na porta especificada no arquivo `.env`).
4. Use ferramentas como Postman ou cURL para interagir com os endpoints da API.

## Endpoints da API
[Liste os endpoints da sua API aqui, por exemplo:]

- `POST /api/auth/register`: Registra um novo usuário
- `POST /api/auth/login`: Autentica um usuário e retorna um JWT
- `GET /api/users/:id`: Recupera detalhes de um usuário (requer JWT)
- `POST /api/upload`: Faz upload de um arquivo (requer JWT)

[Inclua detalhes como corpo da requisição, parâmetros e respostas para cada endpoint, conforme necessário.]

## Contribuição
1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/sua-funcionalidade`).
3. Commit suas alterações (`git commit -m "Adiciona sua funcionalidade"`).
4. Envie para a branch (`git push origin feature/sua-funcionalidade`).
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).
