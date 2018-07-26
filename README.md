# Quer fazer parte da Superbid Webservices ?

O teste consiste basicamente em algumas perguntas abaixo e um teste pratico, basta fazer um fork do repositório responder as perguntas no próprio README.md e submeter o pull request.

## Questionário

* Você já teve alguma experiências em desenvolvimento componentes customizados? Como evitar o problema de componentes complexos com baixa performance?

Já criei alguns componentes customizados. Componentes complexos não devem causar renders demais, se possível.

* Quais patterns você já usou ou conhece para otimizar as chamadas a APIs Rest?

Costumo usar fetch

* Como lidar com cache (browser/cdn/proxy) no lançamento das novas versões da sua aplicação web?

Ctrl+F5 ou forçar limpeza do cache no browser

* Na sua opinião, quais são as vantagens de React? quais são as desvantagens/riscos no uso do React?

Uso de components e bastante tópicos e discussão hj em dia são boas vantagens, mas depender de third party libraries que podem não ser atualizadas é um risco.

* Considerando uma tela em React contendo informações em tempo real, que deve ser atualizada sempre que ocorrer um determinada ação no servidor, qual arquitetura ou protocolo de comunicação você utilizaria?

Como num chat? Ainda não tive experiência com isso.

* Você já implementou reat com suporte a i18n ? quais os pontos importantes a serem considerados?

Ainda não

## Teste Prático 

Considerando a arquitetura básica utilizando React + Redux, criar uma app contemplando as 3 telas:

![Draft](./draft.png)

Consumir a seguinte api:

https://jsonplaceholder.typicode.com/photos

Deixei o App.js neste link: https://github.com/brunokeiti/react_redux_album/blob/master/src/App.js

