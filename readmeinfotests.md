npx react-native init nativetests

yarn add @testing-library/react-native -D <br/>
no packagejson substituir "preset": "react-native" por "preset": "@testing-library/react-native" <br/>
"jest": {
    "preset": "@testing-library/react-native",
    "setupFiles": [
      "./node_modules/react-native-gesture-handler/jestSetup.js"
    ],
    "setupFilesAfterEnv": [
      "@testing-library/jest-native/extend-expect"
    ],
    "testMatch": [
      "**/__tests__/**/*.test.js"
    ],
    "collectCoverageFrom": [
      "!src/services/api.js"
    ],
    "coverageDirectory": "__tests__/coverage",
    "moduleNameMapper": {
      "^~/(.*)": "<rootDir>/src/$1"
    }
  }

yarn add @types/jest -D //para adicioanr o intellisense do jest <br/>

No arquivo .eslintrc.js adicionar ao objeto env o jest: true // para o vscode entender as funceos do jest (it, describe...)

yarn add @testing-library/jest-native -D //lib para extender as expectations do jest para o react-native - add o toHaveProp por exemplo <br/>
adicionar ao package.json: <br/>
"setupFilesAfterEnv": [
  "@testing-library/jest-native/extend-expect"
],

yarn test --watchAll //para rodar o teste o tempo todo ouvindo todos os testes --watch funciona se tiver o git para rodar somente os que foram alterados

yarn add -D jest-styled-components //Caso queira fazer testes com o styledcomponents


##########


create-react-app reacttests

deletar todos os arquivos que nao utilizamos - inclusive aquele de teste

yarn add react-app-rewired -D //para adicionar configuracoes especificas com o create-react-app <br/>
trocar o react-scrips por react-app-rewired nos scrips do package.json (exceto eject) <br/>
criar um script a mais para o coverage: "coverage": "react-app-rewired test --coverage --watchAll=false", <br/>
criar o config-overrides.js com pelo menos o module.exports vazio por ser obrigatorio <br/>
remove a config do eslint no package.json <br/>
adicionar ao package.json a chave jest com as configurações do jest para testes <br/>
PS: esta funcionando com a versao "react-scripts": "3.0.1" a 3.2.0 nao funciona <br/>
"jest": {
  "testMatch": [
    "**/__tests__/**/*.test.js"
  ],
  "setupFilesAfterEnv": [
    "@testing-library/react/cleanup-after-each", //add cleanup depois de renderizar, chama cleanup e apaga o dom para poder renderizar novamente
    "@testing-library/jest-dom/extend-expect", //extende as expectations para testes add toHaveValue e toContainElemente por exemplo
    "jest-localstorage-mock" //substitui automagicamente o localstorage
  ],
  "moduleNameMapper": {
    "^~/(.*)": "<rootDir>/src/$1"
  },
  "collectCoverageFrom": [
    "!src/index.js",
    "!src/services/api.js"
  ],
  "coverageDirectory": "__tests__/coverage"
},

yarn add @testing-library/react @testing-library/jest-dom -D <br/>
a primeira lib eh para ajudar a testar os componentes que criamos  <br/>
a segundo lib adiciona a possiblidade de testarmos HTML (dom) atraves do JEST, ja que ele so conhece JS

yarn add @types/jest -D // add typescript para ter o intellisense

yarn add jest-localstorage-mock -D //mock para localstorage <br/>
add "jest-localstorage-mock" no setupFilesAfterEnv no package.json

yarn add axios-mock-adapter -D //mock para o axios
