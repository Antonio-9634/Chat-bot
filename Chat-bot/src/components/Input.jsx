import React, { useState } from "react";

const Input = ({ onSendMessage }) => {
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    onSendMessage(mensaje);
    setMensaje("");
  };

  return (
    <form onSubmit={manejarEnvio} className="flex">
      <input
        type="text"
        className="flex-1 border p-2 rounded-l"
        placeholder="Escribe tu pregunta..."
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 rounded-r">Enviar</button>
    </form>
  );
};

export default Input;
