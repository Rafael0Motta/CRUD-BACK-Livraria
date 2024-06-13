
# API de Gerenciamento de Livros

Esta API permite gerenciar informações sobre livros um sistema de livors

## Funcionalidades

- Adicionar Livros; 
- Listar Livros; 
- Atualizar Informações sobre livros existentes; 
- Remover livros do sistema; 

## Endpoints

- ### ADICIONAR UM NOVO LIVRO

Para adicionar um novo livro ao sistema, é preciso enviar um JSON com os seguintes campos: 
- TÍTULO
- AUTOR  
- ANO

#### Url

```https
  POST https://crud-back-livraria-production.up.railway.app/api/new
```
#### Exemplo de Envio:

```json
{
  "titulo": "Novo Livro",
  "autor": "Autor do Novo Livro",
  "ano": 2023
}
```

#### Resposta

- 201 Created - Livro adicionado com sucesso.

```json 

{ 
  "id": "ID-GERADO", 
  "message": "Livro adicionado com sucesso, suia id é ID-GERADO"
}
```

- 400 Bad Request - Erro ao adicionar o livro.

```json 
{
  "error": "Mensagem de erro detalhada"
}

```

- ### LISTAR TODOS OS LIVROS

Retorna uma lista de todos os livros cadastrados.

#### Url

```https
  GET https://crud-back-livraria-production.up.railway.app/api/all
```

#### Resposta

- 200 OK - Lista de livros retornada com sucesso.

```json 
[
  {
    "id": "ID-1",
    "titulo": "Pai Rico, pai Pobre",
    "autor": "Robert T. Kiyosaki",
    "ano": 2017
  },
  {
    "id": "ID-2",
    "titulo": "O homem mais rico da Babilônia",
    "autor": "George S Clason",
    "ano": 2017
  },
  {
    "id": "ID-3",
    "titulo": "Hábitos Atômicos:",
    "autor": "James Clear",
    "ano": 2019
  }
]

```

- 500 Internal Server Error - Erro interno do servidor.


```json 
{
  "error": "Mensagem de erro detalhada"
}

```


- ### OBTER UM LIVRO ESPECÍFICO

Retorna um livro específico com base no ID fornecido.

#### Url

```https
  GET https://crud-back-livraria-production.up.railway.app/api/:id
```

#### Resposta

- 200 OK - Livro encontrado.


```json 
{
  "id": "ID-1",
  "titulo": "Pai Rico, pai Pobre",
  "autor": "Robert T. Kiyosaki",
  "ano": 2017
}
```

- 404 Not Found - Livro não encontrado.



```json 
{
  "error": "Livro não encontrado"
}
```
- 500 Internal Server Error - Erro interno do servidor.


```json 
{
  "error": "Mensagem de erro detalhada"
}
```

- ### ATUALIZAR AS INFORMAÇÕES DE UM LIVRO

Retorna um livro específico com base no ID fornecido.

#### Url

```https
  PUT https://crud-back-livraria-production.up.railway.app/api/:id
```

#### Exemplo de Envio:

```json
{
  "titulo": "Novo Título do Livro",
  "autor": "Novo Autor do Livro",
  "ano": 2024
}
```

#### Resposta

- 200 OK - Livro encontrado.


```json 
{
  "updated": 1
}
```

- 404 Not Found - Livro não encontrado.

```json 
{
  "error": "Livro não encontrado"
}
```

- 500 Internal Server Error - Erro interno do servidor.
```json 
{
  "error": "Mensagem de erro detalhada"
}
```



- ### REMOVER UM LIVRO 

Remove um livro existente com base no ID fornecido.

#### Url

```https
  DELETE https://crud-back-livraria-production.up.railway.app/api/:id
```

#### Resposta

- 200 OK - Livro encontrado.


```json 
{
  "deleted": 1
}

```

- 404 Not Found - Livro não encontrado.



```json 
{
  "error": "Livro não encontrado"
}
```
- 500 Internal Server Error - Erro interno do servidor.


```json 
{
  "error": "Mensagem de erro detalhada"
}
```
