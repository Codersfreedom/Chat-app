import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand_store/useConversation';

import { TiTick } from "react-icons/ti";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { extractTime } from '../../../utils/extractTime';

const Chats = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser.id;
    const chatClassName = fromMe?"sender" : "receiver";
    const formatedTime = extractTime(message.createdAt);
    if(!message) return <Skeleton count={1} height={60} />

    return (

        <div className={`${chatClassName}-chat`}>
            <div className={ `${chatClassName}-text`}>
                <p>  { message.message }</p>
            </div>
            <div className='chat-date-info' >
                <small>{formatedTime}</small>
                {fromMe?  <span> <TiTick className='icons' /></span> : null
                }  
            </div>
        </div>

    )
}

export default Chats
