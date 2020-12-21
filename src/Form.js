import { useRef, useState } from "react";

function Form({
  errorMessages,
  submitFunction,
  formClassName,
  placeholder,
  buttonText,
}) {
  const [text, setText] = useState("");
  const textInput = useRef();

  const handleChange = (e) => {
    textInput.current.setCustomValidity("");
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length > 0 && text.length < 31) {
      submitFunction(e, text);
      setText("");
    } else {
      const choice = Math.floor(Math.random() * errorMessages.length);
      const errorMessage = errorMessages[choice];

      textInput.current.setCustomValidity(errorMessage);
      textInput.current.reportValidity();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={30}
        minLength={1}
        ref={textInput}
      />
      <input type="submit" value={buttonText} />
    </form>
  );
}

export default Form;
