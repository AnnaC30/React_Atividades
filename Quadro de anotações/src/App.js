import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [color, setColor] = useState("#ffeb3b");
  const [isTextColor, setIsTextColor] = useState(false);

  const addNote = () => {
    if (note.trim()) {
      const newNote = { text: note, color, isTextColor };
      setNotes([...notes, newNote]);
      setNote("");
    }
  };

  return (
    <div className="app">
      <div className="note-input">
        <textarea
          placeholder="Escreva sua nota..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="color-selection">
          <label>Escolha a cor:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={isTextColor}
              onChange={() => setIsTextColor(!isTextColor)}
            />
            Aplicar cor no texto
          </label>
        </div>
        <button onClick={addNote}>Adicionar Nota</button>
      </div>
      <div className="note-board">
        {notes.map((note, index) => (
          <div
            key={index}
            className="note"
            style={{
              backgroundColor: note.isTextColor ? "#ffeb3b" : note.color,
              color: note.isTextColor ? note.color : "#000",
            }}
          >
            {note.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;