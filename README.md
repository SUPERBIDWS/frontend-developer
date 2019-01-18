# Quer fazer parte da Superbid Webservices ?

O teste consiste basicamente em algumas perguntas abaixo e um teste pratico, basta fazer um fork do repositório responder as perguntas no próprio README.md e submeter o pull request.

## Questionário

* Você já teve alguma experiências em desenvolvimento componentes customizados? Como evitar o problema de componentes complexos com baixa performance?

Sim, já tive experiência com componentes customizados em projetos pessoais e profissionais. Acredito que a performance possa ser otimizada através da estrutura e construção do componente, bem como a utilização de bibliotecas como o Redux, que gerencia o estado da aplicação.

* Quais patterns você já usou ou conhece para otimizar as chamadas a APIs Rest?

Dentre as implementações que otimizam as chamadas a APIs Rest, já utilizei Pagination, Filtering and Versioning, que reduzem a quantidade de dados retornados e tornam as interações mais rápidas.

* Como lidar com cache (browser/cdn/proxy) no lançamento das novas versões da sua aplicação web?

Através da API AppCache, é possivel armazenar a aplicação e, então, a partir da verificação de uma nova versão, notifica-se o usuário e a aplicação é atualizada.

* Na sua opinião, quais são as vantagens de React? quais são as desvantagens/riscos no uso do React?

As vantagens do React são a facilidade da criação de interfaces, a reutilização de componentes customizados e o Virtual DOM, que fornece uma interface mais rápida para o desenvolvedor.
Entre as desvantagens, a característica de ser apenas uma biblioteca e necessitar muitas vezes de complementos, como o Redux, pode ser considerada um ponto negativo em relação a concorrentes, como Angular. A frequência elevada de atualizações também pode dificultar a manutenção das aplicações feitas em React, o que pode ser analisado como um risco.

* Considerando uma tela em React contendo informações em tempo real, que deve ser atualizada sempre que ocorrer um determinada ação no servidor, qual arquitetura ou protocolo de comunicação você utilizaria?

Apesar de ainda não ter utilizado, acredito que bibliotecas como Socket.IO fornecem essa interface em tempo real entre cliente e servidor.

* Você já implementou reat com suporte a i18n ? quais os pontos importantes a serem considerados?

Ainda não implementei a internacionalização em aplicações.

## Teste Prático 

Considerando a arquitetura básica utilizando React + Redux, criar uma app contemplando as 3 telas:

![Draft](./draft.png)

Consumir a seguinte api:

https://jsonplaceholder.typicode.com/photos

