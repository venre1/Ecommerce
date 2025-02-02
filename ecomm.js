
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession =require('cookie-session');
const authRouter = require('./auth');
const AdminproductsRouter= require('./product');
const productsRouter = require('./productspage');
const cartsRouter = require('./cartsroute');

const app  = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true})); 
app.use(cookieSession({
keys:['baf5jdk5sl6md3vnhjfv9']
}));
 app.use(authRouter);
 app.use(productsRouter);
 app.use(AdminproductsRouter);
 app.use(cartsRouter);
app.listen(3003,() =>{
  console.log('Listening');
});