# Projeto de automação de testes com CodeceptJS e Rest API

# Pré-Requisitos:

Java 11 JDK,
VS Code

## Estrutura do Projeto

./output:
Evidências da execução dos testes

./resource/api/jsonSchema.js:
Responsável por fazer as validações da estrutura do response da API

./resource/api/responseValidation.js:
Responsável por fazer as validações de forma genérica do response da API

./test/pet_store_test.js:
Consta os cenários de testes para execução

./Utils/name.js:
Responsável por gerar nomes randômicos durante a execução dos testes da API

./Utils/number.js:
Responsável por gerar números randômicos durante a execução dos testes da API

# Observações:

Faça o donwload do template no repositório de código para utilizar no seu projeto em especifico, feito isso, fique a vontande para usufruir dos recursos disponíveis e também customizar de acordo com sua necessidade.

# Comandos utilizados durante a construção da automação de API com CodeceptJS

## Inicialização do projeto:

npm init

## Instalação do codeceptjs na pasta do projeto:

npm i codeceptjs --save-dev

## Inicialização do codeceptjs:

npx codeceptjs init

## Comandos para rodar a automação dos testes

npx codeceptjs run

## Configuração de informações randômicas via NPM

npm install node-random-name
npm install random-number

## Relatorio Allure

npm install @codeceptjs/allure-legacy --save-dev
npx allure serve output

## Instalação do prettier e eslint

npm install prettier
npm install eslint -D
npm init @eslint/config
npm install eslint-config-airbnb-base
npm install --save-dev eslint-plugin-prettier
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
npm install --save-dev lint-staged

OBS.: Após executar os comandos acima, copiar as pastas: .eslintignore, .eslintrc.js, .prettierignore, .prettierrc e adicionar comandos na pasta package.json:
"scripts": {
"lint": "eslint src --max-warnings=0"
},
"lint-staged": {
"src/\*_/_": [
"npx lint --fix"
]
},

## Instalação do Husky

npm install husky --save-dev
npm install -g git-cz
npm install commitizen -g --force
npm install --save-dev git-cz

OBS.: Copiar as pastas: .husky, changelog.config.js e adicionar comandos na pasta package.json:
"scripts": {
"prepare": "husky install",
"precommit": "git add . ",
"commit": "git cz && node .husky/push.js",
},
