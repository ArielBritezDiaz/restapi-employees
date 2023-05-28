import {pool} from '../db.js' //Subimos un nivel y llegamos a 'db.js'

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS Result') // Con esto hacemos una consulta asíncrona a la base de datos y enviamos una respuesta simple 'Pong' guardada en una constante
    res.json(result[0]) //Enviamos el json pero enviamos la posición 0, que es donde se ubica 'result'
}