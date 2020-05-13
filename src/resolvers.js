import { tasks } from "./sample";
export const resolvers = {
    Query:{
        hello: () => {
            return 'Hola, respuesta desde GRAPHQL'
        },
        greet(root, {name}){
            //args son los valores recibidos por la consulta graphql
            return `Hola, ${name}`
        },
        tasks(){
            return tasks
        }
    },
    Mutation:{
        createTask(_, {input, }){
            input._id = tasks.length;
            tasks.push(input)
            return input;
        }
    }
};