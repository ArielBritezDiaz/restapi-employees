import {Router} from 'express'; // '{ Router }' Nos permite crear toda una sección de rutas, como agrupar todas las rutas y colocarles un nombre
import { getEmployees, createEmployees, updateOneEmployee, deleteOneEmployee, getOneEmployee } from '../controllers/employees.controller.js'

const router = Router()

//En vez de usar 'app.(verbHTTP)' utilizamos 'router.(verbHTTP)'
router.get("/employees", getEmployees)

//Utilizamos los parámetros para obtener un ID
router.get("/employees/:id", getOneEmployee)

router.post("/employees", createEmployees)

// En el verbHTTP 'patch' se actualiza algo parcialmente, en este caso, si no queremos modificar todo el empleado
router.patch("/employees/:id", updateOneEmployee)

router.delete("/employees/:id", deleteOneEmployee)

export default router //Esto significa que ya terminamos de escribir el código y lo exportamos