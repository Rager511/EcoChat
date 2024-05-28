import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../../styles/_chatbot.module.css';

const ChatbotPage = () => {
    const [isActive, setIsActive] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleMessageSend = () => {
        const text = inputValue.trim();
        if (text === '') return;

        const newMessage = { sender: "User", message: text };
        setMessages(prevMessages => [...prevMessages, newMessage]);

        console.log('Sending message to backend:', text);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            console.log('Response from backend:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
           
            return response.json();
        })
        .then(data => {
            console.log('Data received from backend:', data);
            const chatgptResponse = data.answer;
            const botMessage = { sender: "AliDanTek", message: chatgptResponse };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        })
        .catch(error => {
            console.error('Error:', error);
            const errorMessage = { sender: "AliDanTek", message: "An error occurred. Please try again later." };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        });

        setInputValue('');
    };

    return (
        <div className={`${styles.chatbox} ${isActive ? styles.chatbox__active : ''}`}>
            <div className={styles.chatbox__support}>
                <div className={styles.chatbox__header}>
                    <div className={styles.chatbox__image__header}>
                        <Image src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" width={50} height={50} />
                    </div>
                    <div className={styles.chatbox__content__header}>
                        <h4 className={styles.chatbox__heading__header}>Chat support</h4>
                        <p className={styles.chatbox__description__header}>Hi. I'm AliDanTek Chatbot Support. How may I assist you today?</p>
                    </div>
                </div>
                <div className={styles.chatbox__messages}>
                    {messages.map((item, index) => (
                        <div key={index} className={`${styles.messages__item} ${item.sender === "User" ? styles.messages__item__operator : styles.messages__item__visitor}`}>
                            {item.message}
                        </div>
                    ))}
                </div>

                <div className={styles.chatbox__footer}>
                    <input
                        type="text"
                        placeholder="Write a message..."
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyPress={e => {
                            if (e.key === 'Enter') {
                                handleMessageSend();
                            }
                        }}
                    />
                    <button className={styles.send__button} onClick={handleMessageSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotPage;
