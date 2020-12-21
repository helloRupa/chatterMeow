import { useEffect } from "react";
import Form from "./Form";

const errorMessages = [
  "Seriously, seriously! Put your name in!",
  "Feed me your name words.",
  "Don't even with that business!",
  "All it takes is just one name.",
  "Your name is important. Tell it to me.",
];

function NameForm({ setName }) {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }, 50);

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleSubmit = (e, name) => {
    setName(name);
  };

  const props = {
    errorMessages,
    submitFunction: handleSubmit,
    placeholder: "Your name, your highness",
    buttonText: "Enter",
  };

  return (
    <div className="modal">
      <h1>ChatterMeow</h1>

      <Form {...props} />

      <span className="tiny-text">Just a quick experiment.</span>
    </div>
  );
}

export default NameForm;
