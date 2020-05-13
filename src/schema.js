//makeExecutableSchema es para unir resolver con typeDefs
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";
import {  } from "module";

//Tipos de datos que puedo consultar desde una API de graphql
//En las consulta con GraphiQL, ejemplo tasks se tiene que pedir un objeto con lo que se solicita... Ejemplo:   tasks {_id number}
//En el caso que hayan que pedir unos parametros requeridos (los que están dentro del parentesis) ejemplo greet... se usa el !
//type Mutation es el inverso del type Query. Es para modificar datos
const typeDefs = `
    
    
    type Query{
        hello: String,
        greet(name: String!): String,
        tasks: [Task]
    }

    type Task{
        _id: ID,
        title: String!,
        description: String!,
        number: Int
    }

    type Mutation{
        createTask(input: TaskInput): Task
    }

    input TaskInput{
        title: String!,
        description: String!,
        number: Int
    }
    
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

