![myjam-banner](https://user-images.githubusercontent.com/108702071/203425580-4747d10e-65ca-4c99-8052-c0b9c639767a.png)

<br>

> **Status:** em desenvolvimento 🔄

<br>

O site **MyJam** é uma plataforma de ensino musical que entrega o conhecimento de forma customizada para que se adeque ao gosto, velocidade e tempo disponível do usuário.

Este projeto foi inteiramente desenvolvido como trabalho de conclusão do curso de Desenvolvimento Web Full Stack, referente ao Grupo 2 da turma XP 44. Os alunos de back-end responsáveis por esta API foram:

<br>

<table align=center>
  <tr>
   <td align="center" width=150> <img src="./files/devs/eduardo.png" width=100/></br><a href="https://github.com/EduQuaresimin"> Eduardo<br>Quaresimin </a>
   </td>

   <td align="center" width=150> <img src="./files/devs/felipe.png"  width=100/></br><a href="https://github.com/heylipemoreno"> Felipe<br>Moreno </a>
   </td>

   <td align="center" width=150> <img src="./files/devs/lorena.png" width=100/></br><a href="https://github.com/lorqrz"> Lorena<br>Queiroz </a>
   </td>

 <td align="center" width=150> <img src="./files/devs/luiz.png" width=100/> </br><a href="https://github.com/EuLuiiz"> Victor<br>Luiz </a>
   </td>   
  </tr>
</table>

<br>

Você pode conferir o repositório dos alunos front-end [clicando aqui](https://github.com/thaisdsandim/MyJam-front).

---

## ⚙️ **Recursos da API**

- **POST:** Registrar
- **POST:** Login
- **GET:** Listar todos
- **GET:** Listar um
- **PUT:** Editar
- **DELETE:** Apagar

<br>

Você também pode analisar o modelo de banco de dados utilizado [clicando aqui](https://raw.githubusercontent.com/heylipemoreno/myjam-back/main/Files/imageDer_v0.11.png).

---

## ▶️ **Instalação**

Clone este repositório:<br>
`$ git clone https://github.com/heylipemoreno/myjam-back`

Acesse a pasta do projeto no terminal/cmd:<br>
`$ cd myjam-back`

Instale as dependências:<br>
`$ npm install`

Crie o arquivo **.env** a partir do **.env.example** e substitua o conteúdo entre as aspas:<br>
>DB_HOST = "Local do servidor (ex.: localhost)"<br>
>DB_PORT = "Número da porta utilizada pelo MySQL (ex.: 3306)"<br>
>DB_USER = "Nome do usuário no MySQL (ex.: root)"<br>
>DB_PASS = "Senha do usuário no MySQL (deixe em branco caso não haja senha)"<br>
>DB_NAME = "Nome do banco de dados (ex.: myjam_database_code)"<br>
>PORT = "Número da porta para rodar a API (ex.: 8000)"<br>

Transpile o código:<br>
`$ tsc`

Faça a migration:<br>
`$ npm run migration:generate`

Crie o banco de dados:<br>
`$ npm run migration:run`

Rode a API:<br>
`$ npm run dev`

---

## 📄 **Documentação**

Acesse a documentação completa da aplicação clicando aqui.
