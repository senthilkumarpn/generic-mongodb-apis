var Products=require('../../Models/products.model');
var Users = require('../../Models/users.model');


var ModelMapping = {

    Mapping: function (model) {
        switch(model){

            case 'products': return Products;
            case 'users': return Users;
            
            default: return null;
        }
    }
}

module.exports = ModelMapping;