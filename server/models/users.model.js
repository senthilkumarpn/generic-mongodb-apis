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
