import { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import NameForm from './NameForm';
import Messages from './Messages';
import ChatForm from './ChatForm';

const socketEndpoint = "http://localhost:8000";
const fetchEndpoint = `${socketEndpoint}/messages`;
const socket = socketIOClient(socketEndpoint);

function App() {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(fetchEndpoint)
    .then(res => res.json())
    .then(setMessages)
    .catch(console.log);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("chat message", (msgs) => {
        setMessages(msgs);
      });
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [messages]);

  return (
    <div className="App">
      { name === "" ? <NameForm setName={setName} /> : null}
      <h1>Hi {name}</h1>
      <Messages messages={messages} />
      <ChatForm name={name} socket={socket} />
    </div>
  );
}

export default App;
