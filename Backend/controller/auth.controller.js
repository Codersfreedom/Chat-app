import bcrypt from "bcryptjs"

import User from "../model/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, cpassword, gender } = req.body;
    console.log(fullname,username,password,cpassword,gender)
    if (password !== cpassword) {
      res.status(400).json({ error: "passwords are not matching" });
      return;
      
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "user is already exist" });
    }

    // hash the password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // getting avatar url from api
    const avatar = `https://avatar.iran.liara.run/public/${gender}/?username=${username}`;

    //saving new user to database
    const newUser = new User({
      fullname,
      username,
      password:hashedPassword,
      gender,
      profilePic: avatar,
    });
    if(newUser){
      generateTokenAndSetCookie( newUser._id,res);
      await newUser.save();
    }
    res.status(201).json({
      id:  newUser._id,
      Fullname: newUser.fullname,
      Username: newUser.username,
      Password: newUser.password,
      Gender: newUser.gender,
      ProfilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in signup controller",error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const login = async (req, res) => {
 
  try {
    const { username, password } = req.body;
    console.log(username,password)
    const user = await User.findOne( {username} );
    const isMatch = await bcrypt.compare(password, user?.password || "");
    if(!user && !isMatch){
      return res.status(400).json({error:"Invalid username or password "})
    }
   
    //res.status(200).json({message:"Login successfull"})
    generateTokenAndSetCookie( user._id,res);
    res.status(200).json({
      id:  user._id,
      Fullname: user.fullname,
      Username: user.username
    });
  } catch (error) {
    console.log("Error in login controller",error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const logout = async (req, res) => {
  try {
   res.cookie("token", "", {maxAge:0})
    res.status(200).json({ message: "Logout successfull" });
  } catch (error) {
    console.log("Error in logout controller",error);
    res.status(500).json({ error: "Internal server error" });
  }
};
