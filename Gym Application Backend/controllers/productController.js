const express = require('express');
const Product = require('../models/productModel');
const userModel = require('../models/userModel');


const buyProduct = async(req,res)=>{
        const {name,email,number,address} = req.body;

        try {
                const existingUser =await userModel.findOne({email:email})
                if(existingUser){
                      const result = await Product.create({
                        name,
                        email,
                        number,
                        address
                })   
                res.status(201).json({message:"Thank you for Buying Successfylly",result:result})
                } else {
                        res
                          .status(404)
                          .json({ message: "User not found please enter correct email" });
                      }
               

                
                
        } catch (error) {
                res.status(500).json({message:"something went wrong"})
        }
}

module.exports = {buyProduct}