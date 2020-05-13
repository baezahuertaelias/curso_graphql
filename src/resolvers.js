import { tasks } from "./sample";

import user from "./models/user";
export const resolvers = {
    Query:{
        hello: () => {
            return 'Hola, respuesta desde GRAPHQL'
        },
        greet(root, {name}, context){
            //El contexto obtenido desde index.js > graphqlHTTP
            console.log(context);
            //args son los valores recibidos por la consulta graphql
            return `Hola, ${name}`;
        },
        tasks(){
            return tasks
        },
        async users(){
            return await user.find();
            
        }
        
    },
    Mutation:{
        //Crear datos temporales
        createTask(_, {input, }){
            input._id = tasks.length;
            tasks.push(input)
            return input;
        },
        //Crear datos en mongodb
        async createUser(_, {input}){
            const newUser = new user(input)
            await newUser.save();
            return newUser;
        }
    }
};