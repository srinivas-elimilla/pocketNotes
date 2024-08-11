import { useState } from "react";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";
import "./styles.css";

function App() {
  const [tab, setTab] = useState(-1);
  return (
    <div className="app">
      <Sidebar setTab={setTab} active={tab >= 0 ? true : false} />
      <Notes tab={tab} active={tab >= 0 ? true : false} setTab={setTab} />
    </div>
  );
}

export default App;
