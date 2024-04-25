// mongodb+srv://mdujefaansari:TUqbfg3k9Ys1BSQC@cluster0.dsxfxu6.mongodb.net/

const express = require('express');
const mongoose  = require('mongoose');
const userRouter = require('./routes/userRoute');
const app= express();
const cors = require('cors');
const { membershipRoute } = require('./routes/memberRoutes');
const contactRoute = require('./routes/contactusRoutes');
const { bookTrailRoute } = require('./routes/bookTrailRoutes');
const prouductRoute = require('./routes/productRoutes');

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
 
 
app.get('/',(req,res)=>{
        res.send("Hello gym app")
})
//user authentication
app.use('/',userRouter)

//membership form
app.use('/',membershipRoute)

//contactus  
app.use('/',contactRoute)

//bookfreetrail
app.use('/',bookTrailRoute)

//buy product
app.use('/',prouductRoute)

mongoose.connect("mongodb+srv://mdujefaansari:TUqbfg3k9Ys1BSQC@cluster0.dsxfxu6.mongodb.net/gymapp")
.then(()=>{
        app.listen(4000, ()=>{
                console.log("Database Connected");
            console.log("Server started on port no.4000" );
        })
    
    })
    .catch((error)=>{
        console.log(error);
    })
