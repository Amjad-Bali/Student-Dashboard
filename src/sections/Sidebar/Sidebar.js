import "./Sidebar.css";
import { Link } from "../../components/index";
import linkData from "../../Data/LinkData";
import { IoIosArrowBack } from "react-icons/io";
import logo from "../../assets/logo.svg";

const Sidebar = () => {
  const LinkList = linkData.map((link) => {
    return (
      <Link
        key={link.id}
        icon={link.icon}
        name={link.name}
        active={link.id === "Link-01" ? "active" : ""}
      />
    );
  });
  const show = (ele) => {
    /* console.log(ele); */
    const sidebar = document.querySelector(".sidebar");
    const arrow = document.querySelector(".sidebar .arrow");
    sidebar.classList.toggle("close");
    arrow.classList.toggle("rotate");
  };
  return (
    <div className='sidebar'>
      <IoIosArrowBack onClick={show} className='arrow' color='#C0BEFF' size='26px' />
      <div className='logo'>
        <img src={logo} alt='' />
        <a href='#Dashborad'>Unive</a>
      </div>
      {LinkList}
      <div className='sidetail'>
        <span>Level up your skills,</span> Software Engineering MasterTrack® Certificate
      </div>
    </div>
  );
};

export default Sidebar;
