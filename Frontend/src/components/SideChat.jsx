import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import './SideChat.css'
import useGetConversations from '../hooks/useGetConversations';
import Conversations from './Conversations';
const SideChat = () => {

    const { loading, conversations } = useGetConversations();

    
    return (
        <div className='side-chat-container' >
            <form className="search-container">
                <span>Chat</span>
                <div className="input-container">
                    <input type="text" placeholder="Search" />
                    <CiSearch id='magnify' className='icons' />
                    <IoIosAddCircle id='add' className='icons' />
                </div>

            </form>
            <div className="chats-container">
                <h2>All</h2>

                {conversations.map((conversation,index) => (

                   <Conversations key={conversation._id} 
                   conversation={conversation}
                   lastIdx = {index  === conversations.length-1}
                   />
                ))}

            </div>
        </div>
    )
}

export default SideChat
