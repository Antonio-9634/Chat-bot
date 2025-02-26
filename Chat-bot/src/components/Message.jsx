import React from "react";

const Message = ({ usuario, bot }) => {
  return (
    <div className="mb-2">
      <p className="text-blue-500 font-semibold">Tú: {usuario}</p>
      <p className="text-gray-700">Bot: {bot}</p>
    </div>
  );
};

export default Message;
