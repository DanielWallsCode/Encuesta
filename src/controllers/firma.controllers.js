import { request, response } from "express"
import Firma from "../models/Firma.js";


export const crearFirma = async (req, res = response) => {
    try {
        const { nombre, apellido, correo, estado, edad, bot } = req.body;
        if (!bot) {
            return res.status(400).json({
                msg: 'Por Favor Deje De Ser Un Robot :)'
            })
        }
        const newFirma = new Firma({ nombre, apellido, correo, estado, edad });

        const saveFirma = await newFirma.save();

        res.redirect('/');
    } catch (error) {
        return res.status(500).json('Algo Ha salido mal :( el correo electronica ya esta registrado')
    }

}

export const obtenerFirmas = async (req, res = response) => {
    try {
        const firmas = await Firma.countDocuments();
        res.render('index.ejs', { firmas })
    } catch (error) {
        return res.status(500).json('Algo ha salido mal alguno de los datos ingresados ya esta registrado')
    }
}
