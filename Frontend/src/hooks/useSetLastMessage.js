import React, { useState } from 'react'
import toast from 'react-hot-toast'
import useConversation from '../zustand_store/useConversation'

const useSetLastMessage =  () => {
    const {selectedConversation} = useConversation();
    
    const setLastMessage = async (lastMessage) =>{
        try {
            console.log(lastMessage)
            const res = await fetch(`api/users/setlastmessage/${selectedConversation._id}`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({lastMessage}),
            })
            const data = await res.json();
            if(data.error) throw new Error(data.error);

            

            

        } catch (error) {
            toast.error(error.message);
        }
    }
    return{setLastMessage};
}

export default useSetLastMessage
