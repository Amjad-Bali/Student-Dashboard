import { useEffect } from "react";
import "./App.css";
import { Dashboard } from "./Pages";
import { Header, Sidebar } from "./sections/index";
function App() {
  useEffect(() => {
    let Progres = Array.from(document.querySelectorAll(".App .active .progress"));
    let i = 0;
    let interval = setInterval(() => {
      Progres.forEach((ele) => {
        if (i < ele.dataset.value) {
          i++;
          ele.style.background = `conic-gradient(#5855D6 ${i * 3.6}deg,#EBEBEB 0deg)`;
          ele.firstChild.textContent = `${i}%`;
        }
      });
    }, 35);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
