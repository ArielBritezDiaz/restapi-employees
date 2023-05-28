import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
    try {
        //throw new Error("Error intesperado")
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch(error) {
        return res.status(500).json({
            "message": "Something goes wrong"
        })
    }
}

export const getOneEmployee = async (req, res) => {
    try {
        // En '?' irá el valr pasado como segundo parámetro del 'pool.query()', que es 're.params.id'
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])

        if(rows.length <= 0) {
            return res.status(404).json({
                message: "Employee not found"
            })
        }

        res.json(rows[0])

    } catch(error) {
        return res.status(500).json({
            "message": "Something goes wrong"
        })
    }
}

export const createEmployees = async (req, res) => {
    try {
        const {name, salary} = req.body //Creamos dos constantes que recibirán respectivamente los datos del json de req.body, que son 'name' y 'salary'

        // 'VALUES (?, ?)' esto es para que luego indicamos las constantes por las cuales se reemplazarán en cada signo de pregunta, que serán las constantes '[name, salary]'
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]) //El resultado lo guardamos en 'rows' ya que es lo que queremos que muestre luego.
        res.send( {
            id: rows.insertId, //Utilizamos el valor que nos devuelve 'rows' en 'insertId' que es el número del id
            name,
            salary,
        } ) //Devolvemos en formato json

    } catch(error) {
        return res.status(500).json({
            "message": "Something goes wrong"
        })
    }
}

export const updateOneEmployee = async (req, res) => {
    try {
        const {id} = req.params
        const {name, salary} = req.body
        
        // 'IFNULL' si esto es nulo o undefined, lo dejará como estaba anteriormente y no lo actualizará a null. Si name IFNULL no lo actualices, dejalo con el name anterior.
        const [result] = await pool.query("UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id])
    
        if(result.affectedRows <= 0) {
            return res.status(404).json({
                "message": "Employee not found"
            })
        }
    
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id])
    
        res.json(rows[0])
    } catch(error) {
        return res.status(500).json({
            "message": "Something goes wrong"
        })
    }
}

export const deleteOneEmployee = async (req, res) => {
    try {
        // En '?' irá el valr pasado como segundo parámetro del 'pool.query()', que es 're.params.id'
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        
        if(result.affectedRows <= 0) {
            return res.status(404).json({
                "message": "Employee not found"
            })
        }

        res.sendStatus(204)
    } catch(error) {
        return res.status(500).json({
            "message": "Something goes wrong"
        })
    }
}