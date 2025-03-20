import React, {useState} from 'react'
import ChatbotSvg from "../assets/chatbot.svg"
import { motion, useScroll, useTransform } from "framer-motion";

const ChatBot = () => {
  const [showChatBot, setShowChatBot] = useState(false);
   const { scrollYProgress, scrollXProgress } = useScroll();
    const y = useTransform(scrollXProgress, [0, 1], ["0%", "-100%"]);
  return (
    <>
      {showChatBot && <div className='fixed top-0 left-0 w-full h-full bg-[#00000024] backdrop-blur-md z-40' onClick={()=>setShowChatBot(false)}> </div>}
      <div className='fixed bottom-6 right-7 z-40 flex items-end gap-6 flex-col '>
        {showChatBot && <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5, 
          ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="chatBotField bg-white h-[250px] w-[380px] rounded-lg p-4">
            
        </motion.div>}
        <div className=" botIcon relative cursor-pointer rounded-full " onClick={()=>setShowChatBot(!showChatBot)}>
            <img className='h-12 w-12' src={ChatbotSvg} alt="chatbot" />
        </div>
         
      </div>
    </>
  )
}

export default ChatBot
