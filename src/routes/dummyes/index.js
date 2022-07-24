const express = require('express');
const dummyRouter = express.Router();

dummyRouter.get('/hola', (req, res)=>{
  res.send("Hola Mundo");
});

module.exports = dummyRouter;