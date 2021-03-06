import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import { connect } from "./database";

const app=express();
connect();

app.get('/', (req, res) =>{
    res.json({
        mensaje: 'Holis'
    })
});


app.use('/graphql', graphqlHTTP({
    graphiql:true, //Herramienta para hacer consultas
    schema: schema, //Definir el esquema a utilizar
    context: {
        messageId : 'test'
    }
}));

app.listen(3000, ()=> {
    console.log('= = = = = = = =');
    console.log('= PUERTO 3000 =');
    console.log('= = = = = = = =');
});