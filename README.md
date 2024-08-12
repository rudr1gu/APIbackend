# Backend Rede de Apoio
- Framework AdonisJS
- ORM Lucid
- Banco de dados MySQL
- 
### Requisitos 

NodeJs v20.14.0
npm v10.7.0

### Instalar e rodar o projeto
```bach
git clone https://github.com/rudr1gu/APIbackend.git
```

```bach
npm install
```
Crie um arquivo na raiz do projeto com o nome `.env`

Copie 
```js
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=xLPuYrOj4YVvmXZi5swmA1Whlx3QsUco
NODE_ENV=development
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=
```
Cole no arquivo `.env` e altere `DB_USER`, `DB_PASSWORD` E `DB_DATABASE` para as configurações do seu banco de dados MySQL
- ligue o servidor MySQL no seu computador e Crie um `DATABASE` com o mesmo nome do `DB_DATABASE`

```bach
node ace serve
```
- `http://localhost:3333/api`.
