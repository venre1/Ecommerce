const Repository = require('./repository');
const path = require('path');
const filePath = path.join('/tmp', 'products.json');

class productRepository extends Repository{

}

module.exports = new productRepository(filePath);