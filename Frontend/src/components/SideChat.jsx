import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import './SideChat.css'
import useGetConversations from '../hooks/useGetConversations';
import Conversations from './Conversations';
import useSearchUser from '../hooks/useSearchUser';



const SideChat = () => {
    const [searchInput, setSearchInput] = useState();
    const {  conversations } = useGetConversations();
    const{loading, searchUser, searchUserData} = useSearchUser();
    
    
    
   
    
  



    const handleSearch = async (e) =>{
        e.preventDefault();
        await  searchUser(searchInput);
    }

    
    return (
        <div className='side-chat-container' >
          
            <form onSubmit={handleSearch} className="search-container">
                <span>Chat</span>
                
                <div className="input-container">
                    <input type="text" placeholder="Search"
                        value={searchInput}
                        onChange={(e) => { setSearchInput(e.target.value) }}
                    />
                    <CiSearch id='magnify' className='icons' />
                    <IoIosAddCircle id='add' className='icons' />
                </div>

            </form>

            <div className="chats-container">
                <h2>All</h2>
            {!searchInput? (
                <>
              

                {conversations.map((conversation, index) => (

                    <Conversations key={conversation._id}
                        conversation={conversation}
                        lastIdx={index === conversations.length - 1}
                    />
                ))}  </>
            ):(

                <>
                     
                    <Conversations conversation={searchUserData} />

                </>

            )}
                

            </div>
        </div>
    )
}

export default SideChat
