import { Schema,model } from "mongoose";


const firmaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        required:true,
        unique: true
    },
    estado: {
        type: String,
        required:true
    },
    edad:{
        type: Number
    }
})

export default model('Firma',firmaSchema);