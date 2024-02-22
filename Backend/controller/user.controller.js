import Conversation from "../model/conversation.model.js";
import User from "../model/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const conversation = await Conversation.find({
      participants: { $all: [loggedInUserId] },
    });

    if (!conversation) {
      conversation = [];
    }

    let users = [];
    for (let i = 0; i < conversation.length; i++) {
      let user;
      if (
        loggedInUserId.toString() === conversation[i].participants[1].toString()
      ) {
        user = conversation[i].participants[0];
      } else if (
        loggedInUserId.toString() != conversation[i].participants[1].toString()
      ) {
        user = conversation[i].participants[1];
      }
      users.push(user);
    }
    let filteredUsers = [];
    for (let i = 0; i < users.length; i++) {
      let query = { _id: users[i] };
      const fusers = await User.findById(query).select("-password");
      filteredUsers.push(fusers);
    }

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in user controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const searchUser = async (req, res) => {
  try {
    const {username} = req.body;
    console.log(username);
    const loggedInUser= req.user.username;
    if(username === loggedInUser) return res.status(500).json({error:"You can't messsage yourself"})
    
    const searchUser = await User.findOne({
      username: username,}
    );
  
   res.status(200).json(searchUser);
   
  } catch (error) {
    console.log("Error in searchUser controller");
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getlastMessage = async (req,res) =>{

  try {
    const {id:userId} = req.params;
    
    
    const lastmessage = await User.findById({
      _id: userId,
    }).select("-password");

    res.status(200).json(lastmessage);

  } catch (error) {
    console.log("Error in lastMessage controller",error.message);
    res.status(500).json({error:"Internal server error"});
  }

};

export const setLastMessage = async (req,res) =>{
  try {
      const {id:userId} = req.params;
      const {lastMessage} = req.body;
      console.log(lastMessage)
      const update = await User.findByIdAndUpdate(userId,{
        lastMessage
      })

     await res.status(200).json(update);

  } catch (error) {
    console.log("Error in setLastMessage controller",error.message)
    res.status(500).json({error:"Internal server error"});
    
  }
};