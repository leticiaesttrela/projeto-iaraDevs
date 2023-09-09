# Projeto de Gerenciamento de Jogadores, Times e Campeonatos
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/leticiaesttrela/projeto-iaraDevs/blob/main/LICENSE)

## Descrição

Este projeto permite o gerenciamento de jogadores, times e campeonatos. Foi desenvolvido como parte do Curso de Desenvolvimento Full Stack [Atlântico Avanti](https://edu.atlanticoavanti.com.br/portal/home/ "Site do Atlântico Avanti") pela equipe "Iara Devs", composta por Diogo Santana Freitas, Letícia Estrela Duarte e Pietra Almeida S. Costa.

## Requisitos
- Node.js (versão 20.5.1)
- PostgreSQL (versão 8.11.3)

## Istalação

```bash
 #Clone o repositório:
  git clone https://github.com/seu-usuario/seu-projeto.git

 #Navegue até o diretório do projeto:
  cd seu-projeto

 #Instale as dependências:
 npm install

#Crie um arquivo .env na pasta src e defina a variável DATABASE_URL com a URL do seu banco de dados PostgreSQL:
DATABASE_URL="postgresql://seu-usuario:senha@localhost:5432/mydb?schema=public"

#Execute o servidor de desenvolvimento:
npm run dev

A aplicação estará disponível em http://localhost:3000.
```

## Uso

A aplicação permite o gerenciamento de jogadores, times e campeonatos. Abaixo estão os detalhes sobre como usar cada uma dessas funcionalidades.

### Jogadores

 - Listar Jogadores
    Rota: `GET /api/jogadores`
    Descrição: Esta rota retorna uma lista de todos os jogadores cadastrados.
    Método HTTP: GET
    Formato da Resposta:
    Status: 200 OK
    Corpo da Resposta:

```json
[
  {
    "id": "1",
    "nome": "Nome do Jogador 1",
    "idade": 25,
    "timeId": "1"
  },
  {
    "id": "2",
    "nome": "Nome do Jogador 2",
    "idade": 30,
    "timeId": "1"
  }
]
```
- Criar Jogador
   Rota: POST /api/jogadores
   Descrição: Esta rota permite criar um novo jogador.
   Método HTTP: POST
   -- Formato da Requisição:
      Corpo da Requisição:
   ```json
   {
  "nome": "Novo Jogador",
  "idade": 22,
  "timeId": "1"
   }
   ```
-- Formato da Resposta:
   Status: 201 Created
   Corpo da Resposta:
   ```json
   {
     "id": "3",
     "nome": "Novo Jogador",
     "idade": 22,
     "timeId": "1"
   } 
   ```

- Atualizar Jogador
   Rota: PUT /api/jogadores/:id
   Descrição: Esta rota permite atualizar as informações de um jogador existente com base em seu ID.
   Método HTTP: PUT
   Parâmetros de Rota:
   id: ID do jogador a ser atualizado
   -- Formato da Requisição:
      Corpo da Requisição:
      ```json
      {
      "nome": "Novo Nome do Jogador",
      "idade": 23,
      "timeId": "1"
      }
       ```

  -- Formato da Resposta:
     Status: 200 OK
     Corpo da Resposta:
       ```json
      {
      "id": "3",
       "nome": "Novo Nome do Jogador",
       "idade": 23,
       "timeId": "1"
      }
      ```
- Excluir Jogador
   Rota: DELETE /api/jogadores/:id
   Descrição: Esta rota permite excluir um jogador com base em seu ID.
   Método HTTP: DELETE
   Parâmetros de Rota:
   id: ID do jogador a ser excluído
   Formato da Resposta:
   Status: 204 No Content

### Times e Campeonatos
Repita um processo semelhante para listar, criar, atualizar e excluir times e campeonatos.

## Contribuição 
Para contribuir com este projeto, siga as etapas abaixo:

1. Crie um fork deste repositório.

2. Clone o fork para a sua máquina local.

3. Crie uma nova branch para sua contribuição:
```bash
  git checkout -b minha-contribuicao
```
4. Faça suas alterações e commit:
```bash
 git commit -m "Adiciona funcionalidade X"
```
5. Envie suas alterações para o GitHub:
```bash
 git push origin minha-contribuicao
```
6. Abra uma solicitação de pull descrevendo suas alterações.


## O que apredemos nesse projeto
Tivemos a oportunidade de aprender e aplicar várias habilidades e conceitos importantes no desenvolvimento de aplicativos web. Aqui estão algumas das lições valiosas que adquirimos durante este projeto:

- Trabalhar em equipe: Uma experiência de Colaboração com divisão de Tarefas e Responsabilidades, comunicação e Coordenação, compartilhamento de Conhecimento, resolução Colaborativa de Problemas, revisões de Código e Feedback Construtivo.

- Uso do Prisma com Banco de Dados PostgreSQL: como utilizar o Prisma, um ORM (Object-Relational Mapping), para interagir com um banco de dados PostgreSQL. Isso incluiu a criação de modelos de dados, migrações de banco de dados e operações CRUD (Create, Read, Update, Delete) para as entidades jogador, time e campeonato.

- Roteamento e Manipulação de Requisições: como configurar rotas e endpoints utilizando o Express.js para criar um API RESTful. Isso permitiu a manipulação de solicitações HTTP para listar, criar, atualizar e excluir recursos, como jogadores, times e campeonatos.

- Gerenciamento de Dependências e Ambiente: Aprendi a gerenciar dependências do projeto usando o npm e a configuração de variáveis de ambiente com o dotenv. Isso é essencial para garantir que o aplicativo funcione corretamente em diferentes ambientes, como desenvolvimento e produção.

- Versionamento de Código com Git: o uso eficiente do Git para controle de versão do código, feito a partir de colaboração em equipe.

-Utilização da especificação do Conventional Commits nas mensagens de commit.

- Documentação de Projetos: Compreendemos a importância de uma documentação clara e completa. A documentação não apenas ajuda a equipe a entender o projeto, mas também facilita a contribuição de outros desenvolvedores e a manutenção a longo prazo.

- Licenciamento de Código Aberto: Adicionar uma licença de código aberto ao projeto para definir os termos de uso e distribuição do software. Isso é crucial para promover a colaboração e o compartilhamento de código.

### Agradecimentos
Agradecemos ao  [Atlântico Avanti](https://edu.atlanticoavanti.com.br/portal/home/ "Site do Atlântico Avanti"), pela oportunidade de participar do Bootcamp através de bolsa de estudos, pelo investimento em nosso crescimento profissional, ao professor [Germanno Teles]() e à monitora [Jheyele Raquel]() por todo conhecimento passado através de uma excelente didática e pela disposição em sempre ajudar, mesmo fora dos horários das aulas. Suas orientações, conhecimentos e apoio foram fundamentais para o sucesso deste projeto. 


# Equipe Iara Devs: 
Diogo Santana Freitas 
Letícia Estrela Duarte 
Pietra Almeida S. Costa

## contatos Diogo Santana Freitas :
<div> 
    <a href = "mailto:diogosantanafreitasuna@gmail.com"><img loading="lazy" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="https://br.linkedin.com/in/diogo-santana-freitas-78852321b" target="_blank"><img loading="lazy" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>   
</div>

## contatos Letícia Estrela Duarte :
<div> 
    <a href = "mailto:leticia.estrela@hotmail.com.br"><img loading="lazy" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="https://www.linkedin.com/in/leticia-estrela-a0266b225" target="_blank"><img loading="lazy" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>   
</div>

## contatos Pietra Almeida :
<div> 
    <a href = "mailto:costapietra@gmail.com"><img loading="lazy" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="https://www.linkedin.com/in/almeidapietra" target="_blank"><img loading="lazy" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>   
</div>
