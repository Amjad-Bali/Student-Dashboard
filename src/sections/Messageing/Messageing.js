import { createContext, useState } from "react";
import { MessageBox, MessageHead, MessageStory } from "../../components";
import { messageData, storyData } from "../../Data/MessageData";
import "./Messageing.css";

export const NameFilter = createContext();
export const HandleFilter = createContext();
const Messageing = () => {
  const [nameFilter, setnameFilter] = useState("");
  //Stories
  const Stories = storyData.map((story) => {
    return <MessageStory key={story.id} image={story.image} name={story.name} />;
  });
  //filter Message
  const filterdMessage = messageData.filter((message) => {
    // console.log(message.title.toLowerCase().includes(nameFilter.toLowerCase()));
    return message.title.toLowerCase().includes(nameFilter.toLowerCase());
  });
  //Message Box
  const MessageBoxs = filterdMessage.map((box) => {
    return <MessageBox key={box.id} message={box} />;
  });

  const handleChange = (name) => {
    console.log(name);
    setnameFilter(name);
  };
  return (
    <NameFilter.Provider value={nameFilter}>
      <HandleFilter.Provider value={handleChange}>
        <div className='messages f-column'>
          <MessageHead />
          <div className='story f-center'>{Stories}</div>
          {MessageBoxs}
        </div>
      </HandleFilter.Provider>
    </NameFilter.Provider>
  );
};

export default Messageing;
