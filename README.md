# Jogo da Quina

Popular jogo de loteria onde são sorteados 5 números (https://pt.wikipedia.org/wiki/Quina_(loteria))extraído de uma sequencia entre 01 e 80 sem que seja permitida a repetição. Para os amantes do cálculo combinátorio (https://pt.wikipedia.org/wiki/Combinat%C3%B3ria) resulta ser um jogo interessante.

Com o intuito de ilustrar o uso da biblioteca de graficação Chartist (https://gionkunz.github.io/chartist-js/) serão programados:

+ Crear um miniprojeto em JavaScript (e claro HTML) para poder visualizar a capacidade do biblioteca Chartist. 
  -Neste caso foi criado o código: https://github-java-script.s3.us-east-2.amazonaws.com/jogo_quina/index.html?331
+ Migrar o projeto anterior para consultar uma API (https://q2gp3i5m5c.execute-api.us-east-2.amazonaws.com/default/jogo_quina?numero_jogo=111) desenvolvida em AWS lambda (https://github.com/julian-gamboa-bahia/jogo_quina/blob/master/consulta_sequencia.js)
  - Para este fim será preciso apenas usar uma consulta "$.getJSON" consultando a API já mencionada.
+ 
<!---
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

-->
