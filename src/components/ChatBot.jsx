import React, { useState, useRef, useEffect } from "react";
import ChatbotSvg from "../assets/chatbot.svg";
import { motion } from "framer-motion";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";
import bg from '../assets/whatsbg.jpg'

const ChatBot = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);
  const isFirstOpen = useRef(true);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setInput("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_AI_SERVER_URL}/prompt`,
        { content: input },
        { withCredentials: true }
      );

      if (res.status === 200) {
        const botReply = res.data.step;
        const audioPath = res.data.audio_file;

        setMessages((prev) => [
          ...prev,
          { type: "bot", text: botReply, audio: audioPath },
        ]);

        const audio = new Audio(`${import.meta.env.VITE_AI_SERVER_URL}${audioPath}`);
        audio.play();
      }
    } catch (err) {
      console.error("ChatBot error:", err);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Something went wrong. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleBotOpen = () => {
    setShowChatBot(!showChatBot);

    if (isFirstOpen.current) {
      setMessages([
        {
          type: "bot",
          text: "Welcome to Xonier Technologies! How can I help you today?",
        },
      ]);
      isFirstOpen.current = false;
    }
  };

  return (
    <>
      {showChatBot && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setShowChatBot(false)}
        ></div>
      )}

      <div className="fixed bottom-6 right-7 z-50 flex items-end flex-col gap-4">
        {showChatBot && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="chatBotField bg-white h-[500px] w-[380px] rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
     
            <div className="bg-teal-700 text-white text-center py-3 font-semibold">
              Xonier Chat Assistant
            </div>

            <div style={{backgroundImage:`url(${bg})`}} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-2 rounded-lg max-w-[80%] text-sm whitespace-pre-wrap ${
                    msg.type === "user"
                      ? "bg-green-100 text-green-900 self-end ml-auto"
                      : "bg-gray-100 text-gray-800 self-start mr-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {isLoading && (
                <div className="bg-gray-200 rounded-lg px-3 py-2 text-sm w-fit">
                  Typing...
                </div>
              )}

              <div ref={bottomRef}></div>
            </div>

         
            <div className="border-t  border-stone-200 p-3 flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask something..."
                className=" rounded-md px-3 py-2 flex-1 text-sm outline-none"
              />
              <button
                style={{ padding: "12px" }}
                onClick={handleSend}
                disabled={isLoading}
                className="py-3 capitalize font-bold flex items-center gap-3 rounded-full px-5 btn-bg text-white"
              >
                <FaPaperPlane className="plane transition-all duration-300" />
              </button>
            </div>
          </motion.div>
        )}

        <div
          className="botIcon relative cursor-pointer rounded-full"
          onClick={handleBotOpen}
        >
          <img className="h-12 w-12" src={ChatbotSvg} alt="chatbot" />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
