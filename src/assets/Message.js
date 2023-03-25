import React from "react";
import "./Message.css";
import MBox from "./MBox";
import Story from "./Story";
import { IoIosArrowDown } from "react-icons/io";

function Message() {
  let story_mess = [
    {
      image: "plus",
      name: "text",
    },
    {
      image: "Image",
      name: "Dianne",
    },
    {
      image: "Image2",
      name: "Jarvis",
    },
    {
      image: "Image3",
      name: "Miles",
    },
    {
      image: "Image4",
      name: "Ursula",
    },
  ];
  let box_mess = [
    {
      image: "MBox1",
      title: "Quiche Hollandaise",
      body: "hanks, Mia. Please let me know when I can...",
      time: "6 min",
      num: "1",
    },
    {
      image: "MBox2",
      title: "Ex Remedy App Group",
      body: "Jarvis: How about I start compiling all feeback...",
      time: "15 min",
      num: "10",
    },
    {
      image: "MBox3",
      title: "John Kumoz",
      body: "Hey Mia. Do you know where I can find last...",
      time: "45 min",
      num: "",
    },
    {
      image: "MBox4",
      title: "Chris Meinfield",
      body: "OK. I’ll have her give you a call and you can figure...",
      time: "Yesterday",
      num: "",
    },
    {
      image: "MBox5",
      title: "Zoe Acorn",
      body: "Any chance we can do it later this week? I’m out...",
      time: "Monday",
      num: "2",
    },
    {
      image: "MBox6",
      title: "Johm Kan",
      body: "Sure, no problem. I’ll send it over once we complete...",
      time: "Tuesday",
      num: "",
    },
  ];
  const show = (ele) => {
    const messages = document.querySelector(".App .dashborad .content .messages");
    const arrow = document.querySelector(".App .dashborad .messages .M-arrow");
    messages.classList.toggle("close");
    arrow.classList.toggle("rotate");
  };
  return (
    <div className='messages f-column'>
      <div className='head f-space'>
        <div className='f-centerlaizy'>
          <a className='photo'></a>
          <h3>Messageing</h3>
        </div>
        <div className='group f-space'>
          <img src='./image/M_search.svg' />
          <img src='./image/Group.svg' />
          <img src='./image/M_more.svg' />
          <IoIosArrowDown className='M-arrow' size='26px' color='#5855D6' onClick={show} />
        </div>
      </div>
      <div className='story f-center'>
        {story_mess.map((ele, key) => {
          return <Story key={key} image={ele.image} name={ele.name} />;
        })}
      </div>
      {box_mess.map((ele, key) => {
        return (
          <MBox
            key={key}
            image={ele.image}
            title={ele.title}
            body={ele.body}
            time={ele.time}
            num={ele.num}
          />
        );
      })}
    </div>
  );
}

export default Message;
