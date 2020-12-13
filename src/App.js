import { useEffect, useState } from 'react';
import './App.css';
import NameForm from './NameForm';
import Messages from './Messages';
import ChatForm from './ChatForm';

const fetchEndpoint = "http://localhost:3000/messages";

function App() {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(fetchEndpoint)
    .then(res => res.json())
    .then(setMessages)
    .catch(console.log);
  }, []);

  return (
    <div className="App">
      { name === "" ? <NameForm setName={setName} /> : null}
      <h1>Hi {name}</h1>
      <Messages messages={messages} />
      <ChatForm name={name} />
    </div>
  );
}

export default App;
