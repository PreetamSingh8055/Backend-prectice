import User from '../modal/user.js'


// Post 
export const createUser = async (req,res) =>{
  try {

    const user  = await User(req.body);

    if(!user){
      return res.send({
        message:"Enter all the required fields"
      });
    }

    const {username,email,password} = req.body;
    const newUser = await User.create({
      username,
      email,
      password
    })
    
    res.status(200).json({newUser});
  } catch (error) {
    console.log(error)
  }
}


// GET

export const getUser = async (req,res) =>{
 
  try {
    const user  = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    
  }
}