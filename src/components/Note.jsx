import React, { useEffect, useRef, useState } from "react";
import leftArrow from "../assets/left-arrow.svg";
import { grpInitials } from "../utils/grpInitials";
import moment from "moment";

const Note = ({ tab, active, setTab }) => {
  const noteRef = useRef();
  const selectedTab = JSON.parse(localStorage.getItem("groups"));
  const [note, setNote] = useState("");
  const [contents, setContents] = useState([]);

  useEffect(() => {
    scrollToBottom();
  }, [contents]);

  const scrollToBottom = () => {
    if (noteRef.current) {
      noteRef.current.scrollTop = noteRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("notes");
    if (storedData) {
      try {
        setContents(JSON.parse(storedData) || []);
      } catch (error) {
        console.error("Error parsing stored data", error);
        setContents([]);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setNote(value);
  };

  const handleCreateNote = () => {
    const newDate = new Date();
    const newNote = {
      id: tab,
      time: moment(newDate).format("h:mm A"),
      date: moment(newDate).format("D MMMM YYYY"),
      note,
    };

    const updatedContents = [...contents, newNote];
    setContents(updatedContents);

    localStorage.setItem("notes", JSON.stringify(updatedContents));
    setNote("");
    scrollToBottom();
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleCreateNote();
    }
  };
  return (
    <div className="notes-container">
      <div className="note-header">
        <div className="grp-list">
          <div onClick={() => setTab(-1)} className="left-arrow">
            <img src={leftArrow} alt="left-arrow" />
          </div>
          <div
            className="grpInitial"
            style={{ backgroundColor: `${selectedTab[tab]?.bg}` }}
          >
            {grpInitials(selectedTab[tab]?.grp)}
          </div>
          <h4>{selectedTab[tab]?.grp}</h4>
        </div>
      </div>
      <div className="note-body" ref={noteRef}>
        {contents
          ?.filter((content) => {
            if (tab === content.id) return content;
          })
          ?.map((i, index) => {
            return (
              <div className="each-note" key={index}>
                <p>{i.note}</p>
                <div>
                  <span>{i.date}</span> <span className="dot"></span>
                  <span>{i.time}</span>
                </div>
              </div>
            );
          })}
      </div>
      <div className="note-footer">
        <textarea
          name="note"
          value={note}
          onChange={handleChange}
          onKeyDown={handleEnterKey}
          placeholder="Enter your text here..........."
        ></textarea>
        <button
          className="svg-btn"
          type="submit"
          disabled={!note}
          onClick={() => handleCreateNote()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="29"
            viewBox="0 0 35 29"
            fill="none"
          >
            <path
              d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
              fill={!note ? "#ABABAB" : "#001F8B"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Note;
