import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

import { BsEmojiSmile } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";



import './ChatRoom.css'
import useConversation from '../zustand_store/useConversation';
import useSendMessage from '../hooks/useSendMessage';
import { useAuthContext } from '../context/AuthContext';
import useGetMessages from '../hooks/useGetMessages';
import Chats from './Chats/Chats';
import useSetLastMessage from '../hooks/useSetLastMessage';
import useListenMessages from '../hooks/useListenMessages';
import { useSocketContext } from '../context/SocketContext';

const ChatRoom = () => {

    const { selectedConversation, setSelectedConversation, } = useConversation();
    const [message, setMessage] = useState();
    const { sendMessages } = useSendMessage();
    const { messages, loading } = useGetMessages();
    const{setLastMessage} = useSetLastMessage();
    useListenMessages();
    const{onlineUsers} = useSocketContext();
    
    const isOnline = onlineUsers?.includes(selectedConversation?._id);
    const lastMessageRef = useRef();
    
    useEffect(()=>{
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
            
        }, 100);
    },[messages])
    
    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) {
            return
        }
        await sendMessages(message);
        await setLastMessage(message);
        setMessage("");
    }

   



   
    return (
        <div className='chat-room-container'>
            {!selectedConversation ? (<NoChatSelected selectedConversation={selectedConversation} />) :
                (<>
                    <div className="chat-room-top-div">
                        <div className="profile-info">
                            <img src={selectedConversation.profilePic} alt="user" />
                            <div className="name">
                                <h4>{selectedConversation.fullname}</h4>
                                <small> {isOnline? "Online":"Offline"}</small>
                            </div>
                        </div>
                        <div className="profile-tools">
                            <div className="buttons-container">
                                <button>Profile</button>
                                <button id='call' >Call</button>
                            </div>
                            <div className="menu-container">
                                <CiSearch className='icons' />
                                <BsThreeDots className='icons' />
                            </div>
                        </div>
                    </div>


                    <div className="chat-room">

                        {!loading && messages.length === 0 && (
                            <h3 className='start-conversation' >Send a message to start the conversation</h3>
                        )}
                        {!loading && messages.length > 0 && messages.map((message) => (
                           <div key={message._id} ref={lastMessageRef} >
                                <Chats
                                message ={message}
                                />
                                
                            </div>
                        ))}

                        <div className="chat-input-container">
                            <form className="chat-input" onSubmit={handleSubmit} >
                                <input type="text" placeholder='Write messages...'
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                />
                                <BsEmojiSmile id='emoji' />
                                <IoMdSend id='sendBtn' />
                            </form  >
                            
                        </div>
                    </div> </>)}

        </div>
    )
}

export default ChatRoom

const NoChatSelected = () => {
    const { authUser } = useAuthContext();



    return (
        <div className='no-chat'>
            <h3>Welcome ✋{authUser.Fullname} ! <br /> Select a chat to start messaging </h3>
        </div>)

}