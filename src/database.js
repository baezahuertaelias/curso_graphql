import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true
        });
        console.log('- - - - - - - - - - - -');
        console.log('>> Mongoose iniciado <<');
        console.log('- - - - - - - - - - - -');
    } catch(e) {
        console.log('- - - - - - - - - - - -');
        console.log('>> Mongoose caido... <<');
        console.log('- - - - - - - - - - - -');
    }
}