import "./Header.css";
import { AiFillMessage, AiOutlineSearch } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import photo from "../../assets/photo.svg";
const Header = () => {
  return (
    <div className='header'>
      <div className='box-input'>
        <span>
          <AiOutlineSearch />
        </span>
        <input
          className='in-search'
          type='text'
          placeholder='Search course, student or instructor'
        />
      </div>
      <div className='notiefie'>
        <span className='message'>
          <AiFillMessage />
        </span>
        <span className='search'>
          <MdNotifications color='white' size='24px' />
        </span>
        <div className='profile'>
          <span className='photo'>
            <img src={photo} alt='' />
          </span>
          <div className='detailes'>
            <h4>Mary V</h4>
            <p>Student</p>
          </div>
        </div>
        <span className='bubble'>
          <BiDotsVerticalRounded />
        </span>
      </div>
    </div>
  );
};

export default Header;
