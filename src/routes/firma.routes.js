import { Router } from "express";
import { crearFirma,obtenerFirmas } from "../controllers/firma.controllers.js";
const router = Router();

router.post('/crear',crearFirma);
router.get('/',obtenerFirmas);

export default router;