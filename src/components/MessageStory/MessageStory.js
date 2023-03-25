import "./MessageStory.css";

const MessageStory = (props) => {
  return (
    <div className='add f-column'>
      <div className='f-centerlaizy'>
        <img src={props.image} alt='' />
      </div>
      <h3>{props.name}</h3>
    </div>
  );
};

export default MessageStory;
