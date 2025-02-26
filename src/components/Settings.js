import React from "react";

const Settings = ({ data }) => {
  const { theme } = data;
  return (
    <div>
      <div>
        <label>
          <input type="radio" name="dark" checked={theme === "dark"} />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="light" checked={theme === "light"} />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;
