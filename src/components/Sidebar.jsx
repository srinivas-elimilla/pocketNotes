import React, { useState } from "react";
import Header from "./Header";
import Groups from "./Groups";

const Sidebar = ({ setTab, active }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return (
    <div
      className={`sidebar ${
        isMobile && active ? "disply-none" : "display-block"
      }`}
    >
      <Header />
      <Groups setTab={setTab} />
    </div>
  );
};

export default Sidebar;
