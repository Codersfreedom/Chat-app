import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import './SideChat.css'
const SideChat = () => {
  return (
    <div className='side-chat-container' >
        <div className="search-container">
            <span>Chat</span>
            <div className="input-container">
            <input type="text" placeholder="Search" />
            <CiSearch id='magnify' className='icons'/>
            <IoIosAddCircle id='add' className='icons' />
            </div>

        </div>
        <div className="chats-container">
            <h2>All</h2>
            <div className="chats">
                <div className="chat">
                    <img src="https://via.placeholder.com/150" alt="user" />
                    <div className="chat-info">
                        <h4>Tony Stark</h4>
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
        </div>
    </div>
  )
}

export default SideChat
