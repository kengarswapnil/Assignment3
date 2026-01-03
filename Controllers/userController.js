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

exports.updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email },
      { new: true, runValidators: true } // return updated document & validate
    );
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};