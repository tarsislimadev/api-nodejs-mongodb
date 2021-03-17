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
  "password": "username"
}
```

* Adicionar um novo usuário

```json
// POST /users
{
  "key": "1234567890",
  "username": "username",
  "password": "username",
  "permissions": [
    "createUsers",
    "editUsers",
    "removeUsers"
  ]
}
```

* Editar um usuário

```json
// PUT /users/0987654321
{
  "key": "1234567890",
  "username": "username",
  "password": "username",
  "permissions": [
    "createUsers",
    "editUsers",
    "removeUsers"
  ]
}
```

* Remover um usuário

```json
// DELETE /users/0987654321
{
  "key": "1234567890"
}
```
