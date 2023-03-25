import "./MessageHead.css";
import photo from "../../assets/photo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiEditBoxLine } from "react-icons/ri";
import { HandleFilter, NameFilter } from "../../sections/Messageing/Messageing";
import { useContext, useRef } from "react";

const MessageHead = () => {
  const nameFilter = useContext(NameFilter);
  const handleFilter = useContext(HandleFilter);
  const head = useRef();
  const form = useRef();

  const show = (ele) => {
    const messages = document.querySelector(".content .messages");
    const arrow = document.querySelector(".messages .M-arrow");
    messages.classList.toggle("close");
    arrow.classList.toggle("rotate");
  };
  const handleClick = (e) => {
    head.current.classList.toggle("close");
    form.current.classList.toggle("close");
    handleFilter("");
  };
  return (
    <div className='wrapper'>
      <div className='head f-space' ref={head}>
        <div className='f-centerlaizy'>
          <a className='photo' href='#photo'>
            <img src={photo} alt='' />
          </a>
          <h3>Messageing</h3>
        </div>
        <div className='group f-space'>
          <span onClick={handleClick}>
            <AiOutlineSearch />
          </span>
          <span>
            <RiEditBoxLine />
          </span>
          <span>
            <BiDotsHorizontalRounded />
          </span>
          <span>
            <IoIosArrowDown className='M-arrow' size='26px' color='#5855D6' onClick={show} />
          </span>
        </div>
      </div>
      <form className='close' ref={form}>
        <input
          className='search'
          type='text'
          placeholder='Please Enter Person name for serach'
          value={nameFilter}
          onChange={(e) => handleFilter(e.target.value)}
        />
        <span onClick={handleClick}>
          <AiOutlineClose className='icon' />
        </span>
      </form>
    </div>
  );
};

export default MessageHead;
