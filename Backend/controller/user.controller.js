import Conversation from '../model/conversation.model.js';
import User from '../model/user.model.js';

export const getUsersForSidebar = async (req,res)=>{
    try {
        const loggedInUserId = req.user._id;

        const conversation = await Conversation.find({
            participants:{$all:[loggedInUserId] }
        })

        if(!conversation) {
            conversation = []
        }
       
        let users=[];
        for (let i = 0; i < conversation.length; i++) {
            
            let user = (conversation[i].participants[1])
            users.push(user);
        }
        let filteredUsers =[];
        for (let i = 0; i < users.length; i++) {
            
            let query = {_id: users[i]}
           const fusers = await User.findById(query).select("-password")
            filteredUsers.push(fusers)
        }

       res.status(200).json(filteredUsers)
       
    } catch (error) {
          console.log("Error in user controller", error.message);
    res.status(500).json({ error: "Internal server error" });
    }
}