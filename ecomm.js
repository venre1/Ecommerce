
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession =require('cookie-session');
const authRouter = require('./routes/admin/auth');
const AdminproductsRouter= require('./routes/admin/product');
const productsRouter = require('./routes/productspage');
const cartsRouter = require('./routes/cartsroute');

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