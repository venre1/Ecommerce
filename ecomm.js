const express = require('express');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const AdminproductsRouter = require('./routes/admin/product');
const productsRouter = require('./routes/productspage');
const cartsRouter = require('./routes/cartsroute');

const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: ['baf5jdk5sl6md3vnhjfv9']
}));

app.use(authRouter);
app.use(productsRouter);
app.use(AdminproductsRouter);
app.use(cartsRouter);

module.exports = app;
