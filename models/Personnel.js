const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const personnelSchema = new Schema({
    identityNumber:{
        type:String,
        required:[true,'`{PATH}` field is required.']
    },
    name:{
        type:String,
        required:[true,'`{PATH}` field is required.']
    },
    surname:{
        type:String,
        required:[true,'`{PATH} filed is required`']
    },
    age:{
        type:Number
    }

});

module.exports=mongoose.model('personnel',personnelSchema);