const User = require('../model/userModel')

exports .createUser = async (req,res)=>{
  try{
  const {name,email} = req.body;
  const newuser = new User({name,email})
  await newuser.save();
  res.status(201).json(newuser)
  }catch(err){
    res.status(500).json({message:err.message})
  }
 
}


exports.getUser = async(req,res)=>{
  try{
    const users = await User.find();
    res.status(200).json(users)

  }catch(err){
    console.log(err)
    res.status(500).json({message:err.message})
  }
}