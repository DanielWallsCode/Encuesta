import express from "express";
import { config } from "dotenv";
import firmaRouter from "./routes/firma.routes.js";
import './database.js';
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
config();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'));
app.set('view-engine','ejs');
app.set('views',path.join(__dirname + '/views'));


app.use(firmaRouter)

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto',process.env.PORT)
})