import "./App.css";
import { Dashborad } from "./Pages";
import { Header, Sidebar } from "./sections/index";
function App() {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <Header />
        <Dashborad />
      </div>
    </div>
  );
}

export default App;
