# Quer fazer parte da Superbid Webservices ?

O teste consiste basicamente em algumas perguntas abaixo e um teste pratico, basta fazer um fork do repositório responder as perguntas no próprio README.md e submeter o pull request.

## Questionário

* Você já teve alguma experiências em desenvolvimento componentes customizados? Como evitar o problema de componentes complexos com baixa performance?

R:Sim, já criei compoenentes customizados e ainda não tive nenhum problema com performance.
Algo que gosto de ultilizar para melhorar desempenho são os selectors do redux.

* Quais patterns você já usou ou conhece para otimizar as chamadas a APIs Rest?

R:Axios &  Fetch.

* Como lidar com cache (browser/cdn/proxy) no lançamento das novas versões da sua aplicação web?

R:Normalmente uso o plugin Clean do webpack para limpar antes de fazer o novo build e os meios comuns do browser para zerar a sessão de cache.

* Na sua opinião, quais são as vantagens de React? quais são as desvantagens/riscos no uso do React?

R:
Pros
VirtualDom para melhor experiência para o usúario e desenvolvimento rápido.
Componentes reutilizáveis que gera economia de tempo no desenvolvimento.
One-Direction Data Flow – proporcionando código estável.
Uma comunidade sempre em crescimento e constante evolução.


Cons
Pouca documentação.
Html no javascript para alguns acaba sendo um problema, gerando uma maior curva de aprendizado por conta disso.

* Considerando uma tela em React contendo informações em tempo real, que deve ser atualizada sempre que ocorrer um determinada ação no servidor, qual arquitetura ou protocolo de comunicação você utilizaria?

R:Socket.io

* Você já implementou reat com suporte a i18n ? quais os pontos importantes a serem considerados?

R:Mas pelo que andei estuando é tranquila a implementação.

## Teste Prático 

Considerando a arquitetura básica utilizando React + Redux, criar uma app contemplando as 3 telas:

![Draft](./draft.png)

Consumir a seguinte api:

https://jsonplaceholder.typicode.com/photos


