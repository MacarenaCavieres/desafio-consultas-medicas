import { allMethod } from "../controllers/consulta.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", allMethod.getHome);

router.get("/consultas", allMethod.getConsulta);

export default router;
