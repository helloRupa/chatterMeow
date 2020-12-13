function Message({ msg }) {
  const formatDateTime = () => {
    const dateTime = msg.created_at.slice(0, 16).split("T");

    return `${dateTime[0]} at ${dateTime[1]}`;
  };

  return (
    <li>
      <span className="username">
        {msg.username} meowed:
      </span> 
      <span className="message">
        {msg.msg}
      </span> 
      <span className="date">
        at {formatDateTime()}
      </span>
    </li>
  )
}

export default Message;