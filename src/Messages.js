import Message from './Message';

function Messages({ messages }) {
  return (
    <ul>
      { messages.map((msg) => <Message msg={msg} key={msg.id} />) }
    </ul>
  )
}

export default Messages;
