import React, { useState } from "react";

const respuestas = {
  "hola": "¡Hola! ¿En qué puedo ayudarte?",
  "calendario académico": "Puedes consultar el calendario académico en la web oficial de la universidad.",
  "horario de clases": "Tu horario de clases está disponible en el portal del estudiante.",
  "inscripción cursos": "Los períodos de inscripción varían cada semestre. Consulta la web de la universidad.",
  "biblioteca": "La biblioteca está ubicada en el edificio central y abre de 8 AM a 8 PM.",
  "servicios estudiantiles": "Puedes contactar a servicios estudiantiles en el correo soporte@universidad.edu.",
  "estrés": "Si necesitas apoyo emocional, visita el departamento de bienestar estudiantil.",
  "discapacidades": "Hay servicios de apoyo para estudiantes con discapacidades. Contacta a inclusión@universidad.edu.",
  "pasantías": "Consulta la oficina de empleo estudiantil para obtener información sobre pasantías.",
  "currículum": "La universidad ofrece asesoría para mejorar tu CV. Pide una cita con el departamento de empleabilidad.",
  "clubes": "Hay varios clubes disponibles en el campus. Visita la web de vida estudiantil para más información.",
  "eventos": "Los eventos del campus se publican en la cartelera digital.",
};

const Chatbot = () => {
  const [mensaje, setMensaje] = useState("");
  const [chat, setChat] = useState([]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    const respuesta = Object.keys(respuestas).find((key) =>
      mensaje.toLowerCase().includes(key)
    );

    const nuevaRespuesta = respuesta
      ? respuestas[respuesta]
      : "Lo siento, no tengo información sobre eso. Intenta otra pregunta.";

    setChat([...chat, { usuario: mensaje, bot: nuevaRespuesta }]);
    setMensaje("");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold text-center mb-4">Chatbot Universitario</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-2">
        {chat.map((c, index) => (
          <div key={index} className="mb-2">
            <p className="text-blue-500 font-semibold">Tú: {c.usuario}</p>
            <p className="text-gray-700">Bot: {c.bot}</p>
          </div>
        ))}
      </div>
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
    </div>
  );
};

export default Chatbot;
