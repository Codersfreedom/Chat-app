import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { BsEmojiSmile } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";

import './ChatRoom.css'

const ChatRoom = () => {
    const noChatSelected = true;


    return (
        <div className='chat-room-container'>
            {noChatSelected ? (<NoChatSelected />) :
                (<>
                    <div className="chat-room-top-div">
                        <div className="profile-info">
                            <img src="https://via.placeholder.com/150" alt="user" />
                            <div className="name">
                                <h4>Tony Stark</h4>
                                <small>Online</small>
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
                        <div className="sender-div">
                            <div className="sender-chat">
                                <div className="sender-text">
                                    <p>Hey this is Tony!</p>
                                </div>
                                <div className='chat-date-info' >
                                    <small>11:00AM</small>
                                    <span><TiTick className='icons' /></span>
                                </div>



                            </div>
                        </div>
                        <div className="receiver-div">
                            <div className="receiver-chat">
                                <div className="receiver-text">
                                    <p>Hey Tony this is banner.</p>
                                </div>
                                <div className='chat-date-info' >
                                    <small>11:00AM</small>

                                </div>
                            </div>
                        </div>
                        <div className="chat-input-container">
                            <form className="chat-input">
                                <input type="text" placeholder='Write messages...' />
                                <BsEmojiSmile id='emoji' />
                            </form  >
                            <div className="send-btn">
                                <IoMdSend id='sendBtn' />
                            </div>
                        </div>
                    </div> </>)}

        </div>
    )
}

export default ChatRoom

const NoChatSelected = () => {
    return (
        <div className='no-chat'>
            <h3>Welcome ✋ Tony Stark! <br /> Select a chat to start messaging </h3>
        </div>)

}