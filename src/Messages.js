import Message from './Message';

const messages = [
  {
    msg: "message",
    username: "john",
    created_at: "Some Date and time"
  },
  {
    msg: "message",
    username: "john",
    created_at: "Some Date and time"
  },
  {
    msg: "message",
    username: "john",
    created_at: "Some Date and time"
  },
  {
    msg: "message",
    username: "john",
    created_at: "Some Date and time"
  },
  {
    msg: "message",
    username: "john",
    created_at: "Some Date and time"
  },
  {
    msg: "message",
    username: "john",
    created_at: "Some Date and time"
  },
  {
    msg: "message",
    username: "john",
    created_at: "Some Date and time"
  },
  {
    msg: "message",
    username: "john",
    created_at: "Some Date and time"
  }
]

function Messages() {
  return (
    <ul>
      { messages.map((msg) => <Message msg={msg} />) }
    </ul>
  )
}

export default Messages;
