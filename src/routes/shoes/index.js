/*
* Capa route, utilizada para el mapeo de los path
*/
const express = require('express');
const shoesRouter = express.Router();
const ShoesServices = require('../../services/shoes/');

const shoesService = new ShoesServices();

// Url's para probar
// http://localhost:3000/shoes/
// http://localhost:3000/shoes/72

// Query params: Filtrar información
// http://localhost:3000/shoes/?page=1&pageSize=10&brand="noke"
shoesRouter.get('/', async(req, res)=>{
  // Paso 6.1.1: Leer la request
  const { price } = req.query;
  try{
    // Paso 6.1.2: Acceder a la capa 'service' para tener una respuesta
    const shoes = await shoesService.findAll(price);
    res.status(200).json(shoes);
  }catch(error){
    // Paso 6.1.3: Si hay un error al acceder al services, respondemos un error génerico
    res.status(404).json( { message: 'No hay datos!' } )
  }
});

// Request param: Son utilizados para ejecurtar operaciones sobre un elemento especifico
shoesRouter.get('/:id', async(req, res)=>{
  const {id} = req.params;
  // const shoe = {id: 1, brand: 'Noke', price: 299, size: 29, searching: id};

  try{
    const foundedShoe = await shoesService.findOne(id);
    res.status(200).send( { message: "Busqueda exitosa!", foundedShoe } );
  }catch(error){
    res.status(404).send( { message: "Ese id no existe!" } );
  }

  // res.json(shoe);
});

// http://localhost:3000/shoes/
shoesRouter.post('/', async(req, res)=>{
  // Paso 6.1.1: Leer la request
  const newShoe = req.body;
  try{
    // Paso 6.1.2: Acceder a la capa 'service' para tener una respuesta
    await shoesService.create(newShoe);
    res.status(201).send()
  }catch(error){
    // Paso 6.1.3: Si hay un error al acceder al services, respondemos un error génerico
    res.status(500).send( { message: 'Intente más tarde' } )
  }
});

// Partial edition: Patch
shoesRouter.patch('/:id', async(req, res)=>{
  const body = req.body;
  const {id} = req.params;
  try{
    await shoesService.editPartial(id, body);
    res.status(200).send( { message: "Modificación Patch exitosa!", id } );
  }catch(error){
    res.status(404).send( { message: "Ese id no existe!" } );
  }
});

// Complete edition: Put
shoesRouter.put('/:id', async(req, res)=>{
  const body = req.body;
  const {id} = req.params;
  try{
    await shoesService.editComplete(id, body);
    res.status(200).send( { message: "Modificación Put exitosa!", id } );
  }catch(error){
    res.status(404).send( { message: "Ese id no existe!" } );
  }
});

// Delete: Delete
shoesRouter.delete('/:id', async(req, res)=>{
  const {id} = req.params;
  try{
    await shoesService.delete(id);
    res.status(200).send( { message: "Eliminación exitosa!" } );
  }catch(error){
    res.status(404).send( { message: "Ese id no existe!" } );
  }
});

module.exports = shoesRouter;