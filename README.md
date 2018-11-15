# Quer fazer parte da Superbid Webservices ?

O teste consiste basicamente em algumas perguntas abaixo e um teste pratico, basta fazer um fork do repositório responder as perguntas no próprio README.md e submeter o pull request.

## Questionário

* Você já teve alguma experiências em desenvolvimento componentes customizados? Como evitar o problema de componentes complexos com baixa performance?
  - Sim, já fiz algumas componentes customizados para uma pequena aplicação
  - Criar pequenos componentes sem aplicar muitas regras nos componentes para evitar um dependencia muito grande.
* Quais patterns você já usou ou conhece para otimizar as chamadas a APIs Rest?
  - Authorization
  - Versioning
  - Error Logging
  - Pagination
* Como lidar com cache (browser/cdn/proxy) no lançamento das novas versões da sua aplicação web?
  - Utilizar interface ApplicationCache para lidar com cache, ou mais recente o PWA que é uma alternativa mais robusta
  - Usar arquivos via cdn tambem são pontos importantes
* Na sua opinião, quais são as vantagens de React? quais são as desvantagens/riscos no uso do React?
    - vantagens
       O react é lib com foco na criação de interfaces, ele dar um liberdade muito grande para os desenvolvedores criarem ricas aplicações com baste reuso de
       de componentes, para que já tem mais afinidade com javascript a curva de aprendizado é menor.
    - desvantagens
        Talvez algums desenvolvedores que não tem muito afinidade com javascript, quem vem de linguagens que usa orientação a objetos. 
    - riscos
        A principio o react não oferece um risco tão grande, visto que é um dos frameworks mais utilizadas e possuem um comunidade muito grande, com varios desenvolvedores engajados com a tecnologia.
  
* Considerando uma tela em React contendo informações em tempo real, que deve ser atualizada sempre que ocorrer um determinada ação no servidor, qual arquitetura ou protocolo de comunicação você utilizaria?
 - Utilizaria um dos métodos do cycle life do react ex: shouldComponentUpdate para o React re-renderiza as informações, através de uma requisação fetch

* Você já implementou react com suporte a i18n ? quais os pontos importantes a serem considerados?
    - Não
## Teste Prático 

Considerando a arquitetura básica utilizando React + Redux, criar uma app contemplando as 3 telas:

![Draft](./draft.png)

Consumir a seguinte api:

https://jsonplaceholder.typicode.com/photos

