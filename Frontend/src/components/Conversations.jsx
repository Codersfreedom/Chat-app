import React from 'react'
import useConversation from '../zustand_store/useConversation'
const Conversations = ({ conversation, lastIdx }) => {
  const {selectedConversation,setSelectedConversation} =   useConversation()
  const isSelected = selectedConversation?._id === conversation._id;
    return (
        <div className={`chats ${isSelected && "active"} `} >
            <div className="chat "
            onClick={()=>{setSelectedConversation(conversation)}}
            >
                <img src={conversation.profilePic} alt="user" />
                <div className="avatar-online"></div>
                <div className="chat-info">
                    <h4>{conversation.fullname}</h4>
                    <p>Hey this is Tony Stark!</p>
                </div>
                <div className="time-info">
                    <div>
                        <p>11:00AM</p>
                    </div>
                    <div id='message-count' >
                        <p>1</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Conversations
