/****************************************************

Julho 10, 2020:

Lendo um arquivo JSON com as inforçaões essenciais, na sequencia de passos:

1) Lendo o JSON de:

https://github-java-script.s3.us-east-2.amazonaws.com/jogo_quina/quina_sorteios.json 

2)  E consultando no formato de passe de argumentos:

https://q2gp3i5m5c.execute-api.us-east-2.amazonaws.com/default/jogo_quina?numero_jogo=111

*****************************************************/

var AWS = require("aws-sdk");
var S3  = new AWS.S3();


exports.handler =  ( event, context, callback ) => {
    
    var numero_jogo=event["queryStringParameters"]['numero_jogo'];
    
////////// Endereço do Arquivo //////////////    

var getParams = {
    Bucket: 'github-java-script', // your bucket name,
    Key: 'jogo_quina/quina_sorteios.json' // path to the object you're looking for
}

////////// Leitura propriamente dita //////////////    

S3.getObject(getParams, function(err, data) {
    
    if (err == null) 
    {
              var fileData = data.Body.toString('utf-8');
              let conteudoJSON = JSON.parse(fileData);
              var keyCount  = Object.keys(conteudoJSON).length;
             callback(null, conteudoJSON[numero_jogo]);
    }
    else
    {
            console.log("Error tenatnto Abrindo: ",getParams);
    }


});
//////////////////////////////    
    const response = {
        statusCode: 200,
        body: JSON.stringify('passo 0'),
    };
    return response;
};
