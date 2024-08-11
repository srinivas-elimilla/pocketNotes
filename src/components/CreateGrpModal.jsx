import React, { useEffect, useState } from "react";

const CreateGrpModal = ({ handleClose }) => {
  const colors = [
    { class: "color-span1", span: "span1", value: "#b38bfa" },
    { class: "color-span2", span: "span2", value: "#ff79f2" },
    { class: "color-span3", span: "span3", value: "#43e6fc" },
    { class: "color-span4", span: "span4", value: "#f19576" },
    { class: "color-span5", span: "span5", value: "#0047ff" },
    { class: "color-span6", span: "span6", value: "#6691ff" },
  ];
  const [grpName, setGrpName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  let grpNames = [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "grp") setGrpName(value);
    else if (name === "color") setSelectedColor(value);
  };

  const handleClick = (color) => {
    setSelectedColor(color);
  };

  const handleCreate = () => {
    if (!grpName) {
      return alert('"Group Name" is required');
    } else if (!selectedColor) {
      return alert("Choose a colour");
    }
    const storedData = localStorage.getItem("groups");
    storedData ? (grpNames = [...JSON.parse(storedData)]) : grpNames;
    grpNames.push({
      grp: grpName,
      bg: selectedColor,
    });
    localStorage.setItem("groups", JSON.stringify(grpNames));
    handleClose();
    window.location.reload();
  };

  return (
    <div className="grp-container">
      <div className="grp-modal">
        <h3>Create New group</h3>
        <div className="grp-form">
          <div className="flex-div">
            <h5>Group Name</h5>
            <input
              type="text"
              name="grp"
              placeholder="Enter group name...."
              onChange={handleChange}
            />
          </div>
          <div className="flex-div">
            <h5>Choose colour</h5>
            <div className="color-spans">
              {colors.map((color, index) => {
                return (
                  <span
                    className={color.class}
                    key={index}
                    onClick={() => handleClick(color.value)}
                    style={{
                      border: `${
                        selectedColor === color.value ? "1px solid #16008B" : ""
                      }`,
                    }}
                  ></span>
                );
              })}
            </div>
            <input
              type="hidden"
              name="color"
              value={selectedColor}
              onChange={handleChange}
            />
          </div>
          <button className="btn" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGrpModal;
