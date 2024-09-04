import React, { createContext, useState } from 'react';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');
const [id, setID] = useState(1);

const handleSubmit = (e, type) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
        id: id ,
        type,
        content: input,
    };

    setMessages([...messages, newMessage]);
    setInput('');
    setID(id + 1);

    console.log(input);
    console.log(messages);
    console.log(type);
    console.log(id)
    };

return (
    <MessageContext.Provider
        value={{
        input,
        setInput,
        handleSubmit,
        messages,
        setMessages
        }}
    >
        {children}
    </MessageContext.Provider>
    );
};

export default MessageContext;
