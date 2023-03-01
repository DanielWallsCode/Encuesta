import mongoose from "mongoose";
import { config } from "dotenv";
config();

mongoose.connect(process.env.MONGO_DB)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err))

