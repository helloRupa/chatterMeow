import Form from "./Form";

const errorMessages = [
  "Please say something with 30 chars. or less.",
  "I want to hear your typing voice up to 30 chars.",
  "I like it when you tell me things.",
  "Share your thoughts with me.",
  "Scream into the void of the lavender internets.",
  "You've got something to say don't you...that's between 1 and 30 chars.?",
  "No one will know your secrets but me.",
];

function ChatForm({ name, socket }) {
  const handleSubmit = (e, message) => {
    socket.emit(
      "chat message",
      JSON.stringify({
        msg: message,
        username: name,
      })
    );
  };

  const props = {
    errorMessages,
    submitFunction: handleSubmit,
    formClassName: "chat",
    placeholder: "Tell Me Sweet Little Meows",
    buttonText: "Send It Meow",
  };

  return <Form {...props} />;
}

export default ChatForm;
