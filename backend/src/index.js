const express = require('express');
const cors = require('cors');
const routes = require("./routes")

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * 
    get: Busca uma informação
    post: Cria uma informação
    put: Altera uma informação
    delete: Deleta uma informação
 */

/**
 *  Tipos de parâmetros:
 * 
 *  Query params: parâmetros nomeados enviados na rota após o "?"  (Filtros, Paginação)
 *  Route params: parâmetros utilizados para identificar recursos
 *  Request body: Corpo da requisição
 * 
 */


app.listen(3333);


