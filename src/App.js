import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";
import NameForm from "./NameForm";
import Chat from "./Chat";
import Loading from "./Loading";

const socketEndpoint = process.env.REACT_APP_ENDPOINT;
const fetchEndpoint = `${socketEndpoint}/messages`;
const socket = socketIOClient(socketEndpoint);

function App() {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetch(fetchEndpoint)
      .then((res) => res.json())
      .then((msgs) => {
        setMessages(msgs);
        setIsReady(true);
      })
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
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="App">
      {name === "" ? <NameForm setName={setName} /> : null}
      {isReady && name !== "" ? (
        <Chat name={name} socket={socket} messages={messages} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
