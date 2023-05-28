//ES Modules. Para que lo pueda interpretar escribimos "type": "module" en el "package.json"
import express from 'express' //Cuando son módulos de terceros no hace falta la extensión.
//import {pool} from './db.js' //Cuando llamamos módulos propios debemos usar la extensión apropiada, en este caso, 'js'.
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json()) //Cuando recibimos los datos, lo convertimos a JSON

app.use(indexRoutes)

// '/api' quiere decir que antes de utilizar alguna ruta de 'employeesRoutes' tendrá que tener '/api' en la ruta. Es un prefijo a todas las rutas.
app.use('/api', employeesRoutes) //Esto es lo mismo que escribir lo que tenemos en 'routes/employees.routes.js' solo que lo exportamos desde aquel archivo, para poder dividir nuestras rutas de una mejor forma.

//Esta ruta la usamos por si no coincide con ninguna de las anteriores, enviamos un mensaje de que el endpoint de la URL no se encontró.
app.use((req, res, next) => {
    res.status(404).json({
        "message": "Endpoint not found"
    })
})

export default app;