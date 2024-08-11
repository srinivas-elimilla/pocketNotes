import React, { useState } from "react";
import bg from "../assets/notes-bg.png";
import lock from "../assets/lock.svg";
import Note from "./Note";

const Notes = ({ tab, active, setTab }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <>
      {active ? (
        <Note tab={tab} active={active} setTab={setTab} />
      ) : (
        <div
          className={`home-notes-container ${
            isMobile && active ? "display-block" : "disply-none"
          }`}
        >
          <div className="img-div">
            <img src={bg} alt="notes-bg" />
          </div>
          <div className="p-div">
            <p>Pocket Notes</p>
            <p>Send and receive messages without keeping your phone online.</p>
            <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
          </div>

          <div className="encrypt">
            <img src={lock} alt="lock" />
            <p>end-to-end encrypted</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Notes;
