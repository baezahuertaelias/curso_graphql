//makeExecutableSchema es para unir resolver con typeDefs
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";
import {  } from "module";

//en type Query veo que datos que puedo consultar desde una API de graphql
//type Mutation es el inverso del type Query. Es para modificar datos
//el resto de type son creados para poder responder cosas (seria definir los datos)
//En las consulta con GraphiQL, ejemplo tasks se tiene que pedir un objeto con lo que se solicita... Ejemplo:   tasks {_id number}
//En el caso que hayan que pedir unos parametros requeridos (los que están dentro del parentesis) ejemplo greet... se usa el !

const typeDefs = `
    
    
    type Query{
        hello: String,
        greet(name: String!): String,
        tasks: [Task]
        users: [User]
    }

    type Task{
        _id: ID,
        title: String!,
        description: String!,
        number: Int
    }
    

    type User{
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Mutation{
        createTask(input: TaskInput): Task
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
    }

    input TaskInput{
        title: String!,
        description: String!,
        number: Int
    }

    input UserInput{
        firstname: String!
        lastname: String!
        age: Int!
    }
    
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

