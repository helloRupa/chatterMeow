import { useState } from 'react';

function NameForm({ setName }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(input);
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <h1>ChatterMeow</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} placeholder="Your name, your highness" />
        <input type="submit" value="Enter" />
      </form>
      </div>
    </div>
  )
}

export default NameForm;