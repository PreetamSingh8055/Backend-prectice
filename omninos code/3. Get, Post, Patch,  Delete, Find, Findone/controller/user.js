import User from '../modal/user.js'



// Post User 
export const createUser = async (req,res) =>{
  try {
    // const user = await User(req.body);
    const{username,email,password} = req.body;
    if(!username || !email || !password){
      return res.json({message:"enter all the required fields"})
    }
    const newUser = await User.create({
      username,
      email,
      password
    });
    res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
  }
}
// Get All user 
export const getAllUser = async (req,res) =>{
  try {
    const user = await User.find({});
  
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
}

// Get user by id 
export const  getUserById = async (req,res) =>{
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    if(!user){
      return res.json({message:"Invalid credentials"})
    }
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (req,res) =>{
  try {
    const {id} = req.params;
    const user = await User.findById(id)
    if(!user){
      return res.send({message:"Invalid credentials"});
    }
    const newUser = await User.findByIdAndUpdate(id,req.body,{
      new:true
    })
    res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (req,res) =>{
  try {
    const {id} = req.params;
    const user = await User.findById(id)
    if(!user){
      return res.send({message:"Invalid credentials"});
    }
    await user.deleteOne();

    res.status(200).json({id})
  } catch (error) {
    console.log(error)
  }
}