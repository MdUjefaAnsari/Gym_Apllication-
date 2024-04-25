const mongoose = require('mongoose')

const ContactusSchema = mongoose.Schema({
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
        branch:{
                type:String,
                required:true
        },
        foodPreference:{
                type:String,
                required:true
        },
        fitnessGoal:{
                type:String,
                required:true
        }
},{timestamp:true})

const contactModel = mongoose.model('ContactUs',ContactusSchema)

module.exports = contactModel