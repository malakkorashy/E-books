const express=require('express')

require('dotenv').config()

const app=express();

// connect to mongo DB
const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("mongoose connected");
         
    }
).catch(error=>{
    console.log(error);
    
})


// here import cors for accept all requested

const cors=require("cors")
// use middleware for cors
app.use(cors());


// here import body parser 

// use middlleware for parse body to parse the body of json body or form data url encoded
const body_parser=require("body-parser");
const { error } = require('console');
const { type } = require('os');
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json())

// use middlleware to accpet req start with user


// import user router
const user_router=require('./routers/userRouter');
app.use("/user",user_router)




app.post("/test",async(req,res)=>{

    try {
        

    const {name,num}=req.body;
    console.log(req.body);
    
    const x=mongoose.Schema({
        name:{
            type:String
        },
        num:{
            type:Number
        }
    })

    const model=mongoose.model("User",x);

    const newModel=await new model({
        name,
        num
    })

    newModel.save();

    const users=await model.find({name});

    res.json(users)
} catch (error) {
        console.log(error);
        
}
})

app.listen(process.env.PORT,()=>{

    console.log("server run successfully and listen to Port:","http://localhost:3000/");
    
})

