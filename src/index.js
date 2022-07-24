// Paso 1: Importación de componentes necesarios
const express = require('express');
const colors = require('colors');

// CORS
const cors = require('cors');

// Paso 2: Declaración de variables para levantar el servidor
const app = express();
const port = 3000;

// Paso 3: Obtener los routes
const routerApi = require('./routes/main.controller.js');

// Paso 4: Agregar middleware para uso de req.body
app.use(express.json());

// 
const whitelist = ['http://127.0.0.1:5500']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por tema de CORS'))
    }
  }
};
app.use(cors(corsOptions));

// Root Endpoint
app.get('/', (req, res) => {
  res.send('API shoes by iJCode1');
});

// Paso 5: Levantar el servidor
app.listen(port, ()=>{
  console.log("Servidor express listen...". rainbow);
});

// Paso 6: Agregar el reoute a la app
routerApi(app);