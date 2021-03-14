# API Node.js MongoDB

## Configurar

Baixe esse repositório

```bash
git clone https://github.com/tmvdl/api-nodejs-mongodb.git
```

Execute o projeto com o Docker Compose

```bash
docker-compose up --build
```

## Para usar

Após configurar o projeto com o Docker Compose, acesse a API em [localhost:3000](http://localhost:3000)

### End-points

Importe o arquivo [api-node-mongo.json](api-node-mongo.json) no [Insomnia REST](https://insomnia.rest/download) para fazer os testes manuais de integração com a API.

* Login

```json
// POST /login
{
	"username": "username",
	"password": "password"
}
```

* Adicionar um novo usuário

```json
// POST /users
{
	"key": "1234567890",
	"username": "username",
	"password": "password",
  "permissions": [
    "createProducts",
    "editProducts",
    "removeProducts"
  ]
}
```

* Editar um usuário

```json
// PUT /users
{
	"key": "1234567890",
  "id": "0987654321",
	"username": "username",
	"password": "password",
  "permissions": [
    "createProducts",
    "editProducts",
    "removeProducts"
  ]
}
```

* Remover um usuário

```json
// DELETE /users
{
	"key": "1234567890",
  "id": "0987654321"
}
```
