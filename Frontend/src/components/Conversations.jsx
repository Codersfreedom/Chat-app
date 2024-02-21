import React from 'react'
import useConversation from '../zustand_store/useConversation'
import { useSocketContext } from '../context/SocketContext';


const Conversations = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    const isSelected = selectedConversation?._id === conversation?._id;
    const{onlineUsers} = useSocketContext();
    const isOnline = onlineUsers?.includes(conversation._id);
    

    return (
        <div className={`chats ${isSelected && "active"} `} >
            <div className="chat "
                onClick={() => { setSelectedConversation(conversation) }}
            >
                <img src={conversation?.profilePic} alt="user" />
                <div className={`avatar-${isOnline?"online" :""} `}></div>
                <div className="chat-info">
                    <h4>{conversation?.fullname}</h4>


                    <p >{conversation?.lastMessage}</p>

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
