import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Inbox_message() {
    // console.log("App component is rendering!"); // Log to check if component mounts

    // State to hold chat messages
    const [messages, setMessages] = useState([]);
    // State to hold the current message being typed
    const [newMessage, setNewMessage] = useState('');
    // Ref for the messages container to enable auto-scrolling
    const messagesEndRef = useRef(null);

    // Dummy data for initial chat messages
    useEffect(() => {
        setMessages([
            { id: 1, text: 'Hi there! How are you?', sender: 'user1', timestamp: '10:00 AM' },
            { id: 2, text: 'I\'m doing great, thanks! How about you?', sender: 'user2', timestamp: '10:01 AM' },
            { id: 3, text: 'I\'m good too. Just working on a new project.', sender: 'user1', timestamp: '10:05 AM' },
            { id: 4, text: 'That sounds interesting! What kind of project?', sender: 'user2', timestamp: '10:06 AM' },
            { id: 5, text: 'It\'s a responsive chat application using React and Tailwind CSS.', sender: 'user1', timestamp: '10:10 AM' },
            { id: 6, text: 'Oh, cool! I\'m sure it will turn out great.', sender: 'user2', timestamp: '10:11 AM' },
            { id: 7, text: 'Thanks! I hope so. It\'s challenging but fun.', sender: 'user1', timestamp: '10:15 AM' },
            { id: 8, text: 'Keep up the good work!', sender: 'user2', timestamp: '10:16 AM' },
            { id: 9, text: 'This is a slightly longer message to test the timestamp positioning and ensure it does not overlap with the text.', sender: 'user1', timestamp: '10:20 AM' },
            // FIX: The previous message 10 was an unterminated string literal.
            // I've replaced it with a shorter, properly terminated string.
            { id: 10, text: 'Got it! Thanks for the update.', sender: 'user2', timestamp: '10:21 AM' },
        ]);
    }, []);

    // Scroll to the bottom of the messages whenever messages state changes
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Function to handle sending a new message
    const handleSendMessage = () => {
        if (newMessage.trim()) { // Ensure message is not empty
            const newMsg = {
                id: messages.length + 1,
                text: newMessage,
                sender: 'user1', // Assume current user is 'user1' for sending messages
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prevMessages) => [...prevMessages, newMsg]);
            setNewMessage(''); // Clear the input field
        }
    };

    // Function to handle key presses in the input field (e.g., Enter to send)
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="min-h-screen from-blue-100 to-purple-100 flex items-start justify-center lg:p-8 font-inter">
            <div className="w-full max-w-4xl bg-white shadow-2xl flex flex-col h-[100vh] sm:h-[90vh] overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r  p-2 shadow-md flex items-center justify-between">
                    <Link to={'/user/1'}>

                        <div className="flex items-center">
                            <img
                                src="https://placehold.co/32x32/818CF8/ffffff?text=U1"
                                alt="User 1 Avatar"
                                className="w-10 h-10 rounded-full border-2 border-white mr-3"
                            />
                            <h2 className="text-md font-semibold">Jon Doe</h2>
                        </div>
                    </Link>
                </div>

                {/* Chat Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50"> {/* Removed custom-scrollbar */}
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex mb-4 ${msg.sender === 'user1' ? 'justify-end' : 'justify-start'
                                }`}
                        >
                            <div
                                className={`flex items-end max-w-[75%] sm:max-w-[60%] lg:max-w-[50%] ${msg.sender === 'user1' ? 'flex-row-reverse' : 'flex-row'
                                    }`}
                            >
                                {/* Avatar */}
                                <img
                                    src={`https://placehold.co/32x32/${msg.sender === 'user1' ? '818CF8' : '6EE7B7'}/ffffff?text=${msg.sender === 'user1' ? 'U1' : 'U2'}`}
                                    alt={`${msg.sender} Avatar`}
                                    className={`w-8 h-8 rounded-full ${msg.sender === 'user1' ? 'ml-2' : 'mr-2'}`}
                                />
                                {/* Message Bubble */}
                                <div
                                    className={`relative p-3 pb-6 rounded-lg shadow-md break-words ${ // Added pb-6 for timestamp space
                                        msg.sender === 'user1'
                                            ? 'bg-[#818CF8] text-white rounded-br-none pr-10' // Added pr-10
                                            : 'bg-white text-gray-800 rounded-bl-none pl-10' // Added pl-10
                                        }`}
                                >
                                    <p className="text-sm leading-snug">{msg.text}</p>
                                    <span
                                        className={`absolute text-xs ${msg.sender === 'user1' ? 'text-blue-200 bottom-1 right-2' : 'text-gray-500 bottom-1 left-2'}`}
                                    >
                                        {msg.timestamp}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} /> {/* Element to scroll into view */}
                </div>

                {/* Message Input Area */}
                <div className="p-4 bg-gray-100 border-t border-gray-200 rounded-b-xl flex items-center space-x-3">
                    <input
                        type="text"
                        className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500 transition-all duration-200"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-[#818CF8] hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
                        aria-label="Send message"
                    >
                        {/* Send icon (SVG) */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Inbox_message;