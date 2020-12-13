import { useState } from 'react';

function ChatForm({ name, socket }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit('chat message', JSON.stringify({
      msg: message,
      username: name
    }));

    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="chat">
      <input type="text" 
        value={message} 
        placeholder="Tell Me Sweet Little Meows" 
        onChange={handleChange}
        maxLength={30}
        minLength={1} />
      <input type="submit" value="Send It Meow" />
    </form>
  )
}

export default ChatForm;
