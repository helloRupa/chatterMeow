import { useState } from 'react';

function ChatForm({ name }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Say something" onChange={handleChange} />
      <input type="submit" value="Chat Your Meow" />
    </form>
  )
}

export default ChatForm;
