import { useEffect, useState } from 'react';

function NameForm({ setName }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }, 50);
  }, []);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(input);
    document.body.style.overflow = "";
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <h1>ChatterMeow</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} placeholder="Your name, your highness" />
        <input type="submit" value="Enter" />
      </form>

      <span className="tiny-text">Not a responsive app, just a quick experiement.</span>
      </div>
    </div>
  )
}

export default NameForm;