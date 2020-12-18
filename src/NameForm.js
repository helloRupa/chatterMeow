import { useEffect, useRef, useState } from "react";

const errorMessages = [
  "Seriously, seriously! Put your name in!",
  "Feed me your name words.",
  "Don't even with that business!",
  "All it takes is just one name.",
  "Your name is important. Tell it to me.",
];

function NameForm({ setName }) {
  const [input, setInput] = useState("");
  const textInput = useRef();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }, 50);

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleChange = (e) => {
    textInput.current.setCustomValidity("");
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length > 0 && input.length < 31) {
      setName(input);
    } else {
      const choice = Math.floor(Math.random() * errorMessages.length);
      const errorMessage = errorMessages[choice];

      textInput.current.setCustomValidity(errorMessage);
      textInput.current.reportValidity();
    }
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <h1>ChatterMeow</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Your name, your highness"
            minLength={1}
            maxLength={30}
            ref={textInput}
          />
          <input type="submit" value="Enter" />
        </form>

        <span className="tiny-text">Just a quick experiment.</span>
      </div>
    </div>
  );
}

export default NameForm;
