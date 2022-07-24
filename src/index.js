// Paso 1: Importación de componentes necesarios
const express = require('express');
const colors = require('colors');
// Paso 2: Declaración de variables para levantar el servidor
const app = express();
const port = 3000;
// Paso 3: Obtener los routes
const routerApi = require('./routes/main.controller.js');

// Paso 4: Agregar middleware para uso de req.body
app.use(express.json());

// Paso 5: Levantar el servidor
app.listen(port, ()=>{
  console.log("Servidor express listen...". rainbow);
});

// Paso 6: Agregar el reoute a la app
routerApi(app);