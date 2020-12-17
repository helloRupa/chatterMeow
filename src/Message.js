function Message({ msg }) {
  const formatDateTime = () => {
    const dateTimePart = msg.created_at.split(".")[0];
    const utcDate = new Date(dateTimePart);
    const offset = utcDate.getTimezoneOffset() * 60_000;
    const localDate = new Date(utcDate - offset);

    return `${localDate.toLocaleDateString()} at ${localDate.toLocaleTimeString()}`;
  };

  return (
    <li>
      <span className="username">{msg.username} meowed:</span>
      <span className="message">{msg.msg}</span>
      <span className="date">on {formatDateTime()}</span>
    </li>
  );
}

export default Message;
