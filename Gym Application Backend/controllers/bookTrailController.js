const BookTrailModel = require('../models/bookTrailModel');

const bookTrail = async(req,res)=>{
        const {name,email,number}= req.body
        try {
               if(number.length === 10){
                const result = await BookTrailModel.create({
                        name,
                        email,
                        number
                }) 
                  return res.status(201).json({message:"Your Book Free Trail sent Successfully",result:result})
        }else{
               return res.status(500).json({message:"number must be 10 digits"})   
        }
                            
        }  
        catch (error) {
               console.log(error);
               res.status(500).json({message:"something went wrong"})
        }

}

module.exports = bookTrail;
