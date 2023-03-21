function Message(props) {
  return (
    <div className="container">
      <br />
      <div className="row">
        <h3>{props.message}</h3>
      </div>
    </div>
  );
}

export default Message;
