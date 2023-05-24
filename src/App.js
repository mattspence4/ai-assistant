import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {MainContainer, ChatContainer, MessageList, Message, MessageInput} from '@chatscope/chat-ui-kit-react'

function App() {
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello, how can I help you today?",
      sender: "ChatGPT"
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessage]

    setMessages(newMessages);

    // set typing indicator
    setIsTyping(true)
  }
 
  return (
    <div className="App">
      <div style={{position: "relative", height: "800px", width: "700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList 
              typingIndicator={isTyping ? <typingIndicator content="generating response"/> : null}
            >
              {messages.map((message, i) =>{
                return <Message key={i} model={message}/>
              })}
            </MessageList>
            <MessageInput placeholder='Enter query here' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
