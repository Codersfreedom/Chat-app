
import { useAuthContext } from '../../context/AuthContext'


import { TiTick } from "react-icons/ti";
import { extractTime } from '../../../utils/extractTime';

const Chats = ({message}) => {
    const {authUser} = useAuthContext();
    const fromMe = message.senderId === authUser.id;
    const chatClassName = fromMe?"sender" : "receiver";
    const formatedTime = extractTime(message.createdAt);
    
   


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
