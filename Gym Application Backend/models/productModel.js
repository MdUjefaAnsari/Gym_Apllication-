const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
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
            }, 
            address:{
                  type:String,
                  required:true  
            }
      },{timestamp:true})

      const Product = mongoose.model('Product',productSchema)

      module.exports = Product
