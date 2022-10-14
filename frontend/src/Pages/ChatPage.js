import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";



const ChatPage = () => {
  const [chats,setChats]= useState(null);

    const fetchChats = async() => {
        const { data }= await axios.get("/api/chat");
        console.log(data)
        setChats(data);
        console.log(chats);
    };

    useEffect(()=>{
        fetchChats();
    },[])
  return (
    
    <div>
     {chats?.map((chat)=>{
      return <div key={chat._id}>{chat.chatName}</div>
     })} 
     </div>
    // <>
    // {chats?.map((e)=>{
    //    console.log(e)
    //   })}
    //   </>
    // <>
    //   {chats?.map((e)=>{
    //    return  <p>{e.chatName}</p>
    //   })}
    // </>
  )
}

export default ChatPage;
