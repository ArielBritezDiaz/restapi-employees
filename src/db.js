// Usamos 'mysql2/promise' para que utilice las promesas y podamos trabajar de forma asíncrona en 'index.js'
import { createPool } from 'mysql2/promise' //'createConnection' mantiene un solo hilo de conexión. 'createPool' tiene un conjunto de conexiones que podemos utilizar en producción fácilmente.

import {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} from './config.js'

// Establecemos la conexión a la db con 'createPool' ubicando los parámetros de la db.
// Lo exportamos para que cuando querramos usarlo escribamos 'pool.(sentencia)'
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

//pool.query('SELECT * FROM employees, (err, result) => {}') // Con esto utilizamos consultas SQL