import React, { useState } from "react";

import { grpInitials } from "../utils/grpInitials";
import CreateGrpModal from "./CreateGrpModal";
const Groups = ({ setTab }) => {
  const [open, setOpen] = useState(false);
  const groupItems = localStorage.getItem("groups");
  const grpArray = JSON.parse(groupItems) ? JSON.parse(groupItems) : [];
  const [activeGrp, setActiveGrp] = useState(null);

  const handleOpenNotes = (e, data, index) => {
    setActiveGrp(index);
    setTab(index);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="groups">
      {grpArray.length > 0
        ? grpArray.map((i, index) => (
            <div
              className={`grp-list ${activeGrp === index ? "active" : ""}`}
              key={index}
              onClick={(e) => handleOpenNotes(e, i, index)}
            >
              <div
                className="grpInitial"
                style={{ backgroundColor: `${i.bg}` }}
              >
                {grpInitials(i.grp)}
              </div>
              <h4>{i.grp}</h4>
            </div>
          ))
        : ""}
      <button className="btn grp-btn" onClick={handleOpen}>
        +
      </button>
      {open && (
        <div className="overlay" onClick={handleClose}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <CreateGrpModal handleClose={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Groups;
