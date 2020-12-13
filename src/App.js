import { useState } from 'react';
import './App.css';
import NameForm from './NameForm';
import Messages from './Messages';
import ChatForm from './ChatForm';

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      { name === "" ? <NameForm setName={setName} /> : null}
      <Messages />
      <ChatForm name={name} />
    </div>
  );
}

export default App;
