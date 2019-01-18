# Quer fazer parte da Superbid Webservices ?

O teste consiste basicamente em algumas perguntas abaixo e um teste pratico, basta fazer um fork do repositório responder as perguntas no próprio README.md e submeter o pull request.

## Questionário

* Você já teve alguma experiências em desenvolvimento componentes customizados? Como evitar o problema de componentes complexos com baixa performance?
R: Sim, atuo hoje com angular e possuo conhecimento em ReactJS
Criar um componente particularizado, onde ele mesmo possui vários outros componentes dentro de sí.

* Quais patterns você já usou ou conhece para otimizar as chamadas a APIs Rest?
Nunca utilizei. Design Patterns para Clean Code e entre outros, porém para Api Rest não.

* Como lidar com cache (browser/cdn/proxy) no lançamento das novas versões da sua aplicação web?
R: Evitar sempre, frameworks estão trabalhando pesado para evitarem ao máximo e sses caras. Angular por exemplo, possuí os BeahviorsSubjects q substituem com excelencia os caches.

* Na sua opinião, quais são as vantagens de React? quais são as desvantagens/riscos no uso do React?
Vantagens: 
	React é uma lib muito simples e leve que foca na camada da view. Não é um		bicho de mil cabeças que faz de tudo um pouco como Angular ou Ember, isso 	faz com que a curva de aprendizado torne-se melhor e mais curta.

* Considerando uma tela em React contendo informações em tempo real, que deve ser atualizada sempre que ocorrer um determinada ação no servidor, qual arquitetura ou protocolo de comunicação você utilizaria?
R: Websocket

* Você já implementou reat com suporte a i18n ? quais os pontos importantes a serem considerados?
R: Nunca.

## Teste Prático 

Considerando a arquitetura básica utilizando React + Redux, criar uma app contemplando as 3 telas:

![Draft](./draft.png)

Consumir a seguinte api:

https://jsonplaceholder.typicode.com/photos
