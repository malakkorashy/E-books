const { status } = require("express/lib/response");



const user=require("../user.model.js");
const register=async(req,res)=>{




}
const jwt=require('jsonwebtoken')
const generatejwt= require()


const log_in=async(async(req,res,next)=>{

const {email, password}=req.body;
if(!email&&!password){
    const error= appError.create('email a password ara required',400, httpStatusText.FAIL)
    return next(error);
}
const user=await user.findOne({email:email});

    const matchedPassword= await bcrypt.compare(password,user.password);
    if(!user){
        const error= appError.create('email a password ara required',401, httpStatusText.FAIL)
        return next(error);
    }
    if (user&&matchedPassword ){
        const token= await generatejwt({email:user.email,id:user._id});
        return res.json({status:httpStatusText.SUCCESS, data:{token}});
    }

else{
    const error= appError.create('something wrong',402, httpStatusText.ERROR)
    return next(error);
}
})


module.exports={

    register,
    log_in
}