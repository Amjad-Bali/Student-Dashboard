import active_01 from "../assets/active-01.svg";
import active_02 from "../assets/active-02.svg";
const activeData = [
  {
    id: "Active-01",
    image: active_01,
    certificate: "Master of Computer Science",
    university: "University of Upstate at Brookstone",
    tags: [
      { id: "degree-01", number: "1", text: "Overdue Assignments" },
      { id: "degree-02", number: "5", text: "Remaining Absenses" },
      { id: "degree-03", number: "A-", text: "AcademicAverage" },
    ],
    progress: {
      number: "75",
      text: "Completion",
    },
  },
  {
    id: "Active-02",
    image: active_02,
    certificate: "Master of Computer Science",
    university: "University of Upstate at Brookstone",
    tags: [
      { id: "degree-01", number: "0", text: "Overdue Assignments" },
      { id: "degree-02", number: "6", text: "Remaining Absenses" },
      { id: "degree-03", number: "--", text: "AcademicAverage" },
    ],
    progress: {
      number: "95",
      text: "Completion",
    },
  },
];

export default activeData;
