import "./MessageBox.css";

const MessageBox = ({ message }) => {
  return (
    <div className='m-box f-space'>
      <div className='f-center'>
        <img src={message.image} alt='' />
        <div className='title f-column'>
          <h3>{message.title}</h3>
          <h3>{message.body}</h3>
        </div>
      </div>
      <div className='note f-column-center'>
        <h3>{message.time}</h3>
        {message.num !== "" ? <span className='f-centerlaizy'>{message.num}</span> : ""}
      </div>
    </div>
  );
};

export default MessageBox;
