//inicio do projeto 

//testando e Aprendendo sobre o node e express

const express = require('express');

const app = express();



app.get("/", (req, res) =>{

//tag html funcional e isso e bem interessante para futuro
    res.send(' <h1>Teste em get </h1>');

})


app.get("/get", (req, res) =>{

    res.send(' <h3>Teste get</h3>');

})


app.listen(3000, ()=>{
    console.log('Servidor web rodando na url http://localhost:3000');
})
