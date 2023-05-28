import { Router } from 'express'
//import {pool} from '../db.js' //Subimos un nivel y llegamos a 'db.js'
import { ping } from '../controllers/index.controller.js'

const router = Router()

//Prueba de conexión a DB
router.get("/ping", ping)

export default router