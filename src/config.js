import {config} from 'dotenv' //Importamos 'config'

config() // Con esto ya podemos leer variables de entorno escritas en el arhcivo '.env'

//console.log(process.env.PORT) //'process' es un objeto global de NodeJs, 'env' almacena todas las variables de la PC y 'PORT' es una de esas variables.

export const PORT = process.env.PORT || 3000 //Puerto del localhost
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || 3306 //Puerto de la DB
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'TomyTomaco2013'
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'