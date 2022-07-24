const express = require('express');

const dummyRouter = require('./dummyes/index');
const shoesRouter = require('./shoes/index.js');
// const customersRouter = require('./customers/index.js');

const routerApi = (app) => {
  // Paso 6.1: Puntos de entrada de la API
  app.use('/dummy', dummyRouter)
  app.use('/shoes', shoesRouter)
  // router.use('/customers', customersRouter)
};

module.exports = routerApi;