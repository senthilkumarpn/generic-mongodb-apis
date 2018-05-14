var Products=require('../../Models/products.model');
var Users = require('../../Models/users.model');
// get future models here

var ModelMapping = {

    Mapping: function (model) {
        switch(model){

            case 'products': return Products;
            case 'users': return Users;
            // add cases for future models here

            default: return null;
        }
    }
}

module.exports = ModelMapping;