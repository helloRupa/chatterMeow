import { useRef, useState } from "react";

function ChatForm({ name, socket }) {
  const [message, setMessage] = useState("");
  const textInput = useRef();

  const handleChange = (e) => {
    textInput.current.setCustomValidity("");
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length > 0 && message.length < 31) {
      socket.emit(
        "chat message",
        JSON.stringify({
          msg: message,
          username: name,
        })
      );

      setMessage("");
    } else {
      const choice = Math.floor(Math.random() * errorMessages.length);
      const errorMessage = errorMessages[choice];

      textInput.current.setCustomValidity(errorMessage);
      textInput.current.reportValidity();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chat">
      <input
        type="text"
        value={message}
        placeholder="Tell Me Sweet Little Meows"
        onChange={handleChange}
        maxLength={30}
        minLength={1}
        ref={textInput}
      />
      <input type="submit" value="Send It Meow" />
    </form>
  );
}

export default ChatForm;
