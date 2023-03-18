import { RiFileMarkFill, RiCalendar2Line } from "react-icons/ri";
import { MdOutlineTextSnippet, MdOutlineGrade } from "react-icons/md";
import { FiUserCheck, FiSettings } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { ImFilesEmpty } from "react-icons/im";
const linkData = [
  {
    id: "Link-01",
    icon: <RxDashboard />,
    name: "Dashborad",
  },
  {
    id: "Link-02",
    icon: <RiFileMarkFill />,
    name: "Course",
  },
  {
    id: "Link-03",
    icon: <ImFilesEmpty />,
    name: "Material",
  },
  {
    id: "Link-04",
    icon: <RiCalendar2Line />,
    name: "Calender",
  },
  {
    id: "Link-05",
    icon: <MdOutlineTextSnippet />,
    name: "Transcripts",
  },
  {
    id: "Link-06",
    icon: <MdOutlineGrade />,
    name: "Grades",
  },
  {
    id: "Link-07",
    icon: <FiUserCheck />,
    name: "Attendance",
  },
  {
    id: "Link-08",
    icon: <FiSettings />,
    name: "Setting",
  },
];
export default linkData;
