import React, { useState } from "react";
import "./ColorSelector.css";

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("white");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-selector">
      <div className="color-options">
        {}
        <div
          className="color-ball"
          style={{ backgroundColor: "red" }}
          onClick={() => handleColorChange("red")}
        />
        <div
          className="color-ball"
          style={{ backgroundColor: "blue" }}
          onClick={() => handleColorChange("blue")}
        />
        <div
          className="color-ball"
          style={{ backgroundColor: "green" }}
          onClick={() => handleColorChange("green")}
        />
        <div
          className="color-ball"
          style={{ backgroundColor: "yellow" }}
          onClick={() => handleColorChange("yellow")}
        />
        {}
      </div>

      {}
      <div
        className="color-panel"
        style={{ backgroundColor: selectedColor }}
      >
        Painel de Cor: {selectedColor}
      </div>
    </div>
  );
};

export default ColorSelector;