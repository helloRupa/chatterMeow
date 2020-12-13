function Message({ msg }) {
  return (
    <li>
      <span className="username">{msg.username}</span> meowed: "{msg.msg}" on {msg.created_at}
    </li>
  )
}

export default Message;