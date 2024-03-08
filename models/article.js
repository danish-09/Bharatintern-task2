const mongoose = require("mongoose");
const articleschema= new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    markdown:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    },

})

module.exports=mongoose.model("article",articleschema)