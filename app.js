const express = require('express');
const {productManager} = require('./ProductManager');

const app = express();
const port = 8080;


app.get('/products', async (req, res) =>{
  const productos = await productManager.getAllProduct();
     //console.log(productos);
  const limit = req.query.limit;

  if (limit != null ) {
    res.send(productos.slice(0, limit))
  }else{

    res.send(productos)
  }

  });


  app.get('/products/:pid',  (req, res) =>{
    const pid = parseInt(req.params.pid);
    console.log(pid)
    //console.log(isNaN(pid))

    if (pid != null ) {

      const productos =  productManager.getProductById(pid);
      res.send(productos)
    }//else{
  
      //res.send(productos)
   // }
    
  
    });


app.listen (port, () => {
console.log ('Server runnning on port 8000: ', port);
})

