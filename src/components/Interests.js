import React from "react";

const Interests = ({ data }) => {
  const { interests } = data;
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="musci"
            checked={interests.includes("music")}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="javscript"
            checked={interests.includes("javascript")}
          />
          Javascript
        </label>
      </div>
    </div>
  );
};

export default Interests;
