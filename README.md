# Projeto Biblioteca Node API

API de uma Biblioteca com cadastro de usuario, endereco, libros e locacao de livros. 

A documentacao da API pode ser acessada em [API Biblioteca](https://academy-accenture-node.herokuapp.com/documentation#/)

## Team Duke_Gama_Friends
	Ivan Domingos Moreira
	Joao Fagundes Villar Bernardes
	Kainan Pinheiro
	Lazaro Marinho
# Estrutura do projeto
![](https://uploaddeimagens.com.br/images/003/183/008/full/estrutura_projeto.png?1617660640)

# Tecnologias utilizadas
- [Hapi](https://hapi.dev/tutorials/gettingstarted/?lang=en_US)
- [JSON Web Tokens](https://jwt.io/#)
- [PostgreSQL](https://www.postgresql.org/#)

#### Endpoints Diponíveis
##### Cadastro (LISTAR:GET):
https://academy-accenture-node.herokuapp.com/cadastro

##### Cadastro (SALVAR:POST):
https://academy-accenture-node.herokuapp.com/cadastro
```sh
{
  "cpf": "string",
  "nome": "string",
  "email": "string",
  "telefone": "string",
  "login": "string",
  "senha_hash": "string",
  "cep": "string"
}
```
##### Cadastro (BUSCARID:GET):

https://academy-accenture-node.herokuapp.com/cadastro/{ID}

##### Livros (EXIBIRTODOS:GET):

https://academy-accenture-node.herokuapp.com/livros

##### Livros (SALVAR:POST):
https://academy-accenture-node.herokuapp.com/livros
```sh
{
  "isbn": "string",
  "titulo": "string",
  "valor_diaria": 0,
  "exemplares": 0
}
```
##### Livros (EXIBIRTODOS:GET):

https://academy-accenture-node.herokuapp.com/locacao

##### Locação (EXIBIRTODOS:GET):

https://academy-accenture-node.herokuapp.com/locacao

##### Locação (EXIBIRTODOS:GET):

https://academy-accenture-node.herokuapp.com/locacao/{id}?id={ID}

##### Locação (AGENDAR:POST):
https://academy-accenture-node.herokuapp.com/locacao/agendar
```sh
{
  "cadastro_id": 1,
  "data_previsao_entrega": "2021-04-05",
  "livro_id": [
    {
      "id": 1
    }
  ]
}
```
##### Locação (GET):

https://academy-accenture-node.herokuapp.com/locacao/{id}
##### Locação (RETIRARLIVRO:PUT):

https://academy-accenture-node.herokuapp.com/locacao/retirar/{id}
##### Locação (DEVOLVERLIVRO:PUT):

https://academy-accenture-node.herokuapp.com/locacao/devolver/{id}

##### Login (POST):
https://academy-accenture-node.herokuapp.com/login:

```sh
{
  "senha": "string",
  "usuario": "string"
}
```
