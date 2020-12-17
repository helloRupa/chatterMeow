import Messages from "./Messages";
import ChatForm from "./ChatForm";

function Chat({ name, messages, socket }) {
  return (
    <>
      <h1>Hi {name}</h1>
      <Messages messages={messages} />
      <ChatForm name={name} socket={socket} />
    </>
  );
}

export default Chat;
