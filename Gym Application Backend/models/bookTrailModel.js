const mongoose = require('mongoose');

const bookTrailSchema= mongoose.Schema({
        name:{
                type:String,
                required:true
        },
        email:{
                type:String,
                required:true
        },
        number:{
                type:Number,
                required:true
        }

},{
        timestamp:true
})

const BookTrailModel = mongoose.model('BookFreeTrail',bookTrailSchema)

module.exports = BookTrailModel