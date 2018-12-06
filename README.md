# Marko Starter Demo
This repo demos the basic features of [`marko-starter`](https://github.com/marko-js/marko-starter).

## Install

```bash
npm install
```

## Starting the server

```bash
npm start
```

Start the server in production mode (minification enabled, etc.):

```bash
NODE_ENV=production npm start
```

## Build a static site
Build the project in production mode:

```bash
npm run build
```

By default, the generated static site will be placed in `dist/`.

## Feature Demos

### Live reload

Change a file and the server will restart and the browser will refresh.  Hot reload is enabled for certain files.

### Components

See example components and how they can be scoped to pages or the whole site.

### Routing

Learn to create routes and use route parameters.

### Layouts

Learn to create components that can be passed content and include that content in their own template.

### Styles and Images

Learn how to use styles within a component and how to use resources (like images) in a component.


### Start
Precisa instalar marko-cli, com ele da para criar projetos com 'marko create seuNomeDeProjeto'

npm install marko-cli --global

Para rodar apenas 'npm start'

- Sintaxe

Ele tem uma sintaxe resumida, mas não é obrigatória.

- Organizaçao de arquivos

É possível escrever css/html/js no mesmo arquivo, mas nao é obrigatório
index.marko
style.css
component.js

- Rotas

Elas sao simples, e feitas basicamente através de hierarquia de pastas, iniciando com a pasta routes.
O nome da pasta será por default o nome da rota.
Nessa pasta é obrigatório haver o arquivo index.marko ou o arquivo route.js.
Para alterar defaults e tals, é só utilizar o route.js

- Componentizaçao

É organizado em pastas, é possível criar componentes na pasta src/components, sendo que cada componente pode ter sua própria pasta de componentes, que serao visíveis apenas para ele mesmo.
É possível criar componentes também dentro da pasta routes.
