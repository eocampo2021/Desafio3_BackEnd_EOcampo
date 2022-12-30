const express = require('express');
const {productManager} = require('./ProductManager');

const app = express();
const port = 8080;


app.get('/products', async (req, res) =>{
  const productos = await productManager.getAllProduct();
    // console.log('productos');
  const { limit } = req.query;

  if (limit) return res.send(productos.slice(0, limit));
  else return res.send(productos);

  });
/*
  app.get('/products/:pid', async (req, res) =>{
    const productos = await productManager.getAllProduct();
    
  
    });
*/


app.listen (port, () => {
console.log ('Server runnning on port 8000: ', port);
})

