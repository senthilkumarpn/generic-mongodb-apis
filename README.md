# Generic mongodb apis in Node
This contains a generous mongo db api structure in Node JS.

Supported operations are 
<ul>
    <li>find</li>
    <li>find with query</li>
    <li>select</li>
    <li>sorting</li>
    <li>skip</li>
    <li>top</li>
    </ul>

## Quick Start
### Installation

``` $ npm install```

### Configuration

#### appSettings
<ul>
<li>By default, app is connecting to local mongo db. In order to connect to any cloud mongo make necessary changes.</li>
    
<li>In order for Ad Authentication change <i>config.Authentication</i> to <strong>true</strong>.</li>

<li>audience should be your APP ID URI in App Registration.</li>

<li>Token generation steps can be found in https://blog.jongallant.com/2017/03/azure-active-directory-access-tokens-postman/ </li>
</ul>

```javascript
var config = {};

<!-- cloud mongo start  -->
<!-- config.MongoDb=''; -->
<!-- config.user=''; -->
<!-- config.password=''; -->
<!-- cloud mongo end  -->

<!-- local mongo start  -->
config.MongoDb="mongodb://localhost/mydb";
<!-- local mongo end  -->

<!-- Authentication Start -->
config.Authentication = false;
config.audience = '';
<!-- Authentication End -->

module.exports = config;
```

### server/models

supposed to create mongoose models for the collections which are to be required expose in the API. Sample model have created in this folder.

```javascript
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var Users=new Schema(
    {
        "UserId":{type:Number,required: true,unique: true,min: 1},
        "UserName":{type:String,required: true},
        "Age": {type:Number,required: true,min:1}
    },{versionKey: false }

);

module.exports=mongoose.model('Users', Users, 'Users'); 

```

### mapping

Do the necessay model mapping with collection name.

```javascript
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
```

## Sample usage
###
```
http://localhost:3000/mongodb/users
http://localhost:3000/mongodb/users?UserId=1
http://localhost:3000/mongodb/users?sortby=UserName&order=DESC
http://localhost:3000/mongodb/users?select=UserName,UserId
```

