const Repository = require('./repository');
const path = require('path');
const filePath = path.join('/tmp', 'carts.json');
class CartRepository extends Repository{}


module.exports = new CartRepository(filePath);