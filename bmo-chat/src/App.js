import React, { useState, useEffect, useRef } from "react";
//ARRAY CON LAS PREGUNTS Y LAS RESPUESTAS
const respuestas = {
  "opciones": "Informacion Academica y Administrativa | Recursos y Servicios del campus | Apoyo y Bienestar Estudiantil | Orientacion Sobre Carrera y desarrollo profesional | Vida Estudiantil y eventos sociales",
  "gracias": "De nada es un gusto responderte si necesitas consultar otra cosa digita la palabra opciones",

  //Opcion 1 y sus respuestas
  "Informacion Academica y Administrativa": "¿Cuál es el calendario académico para este semestre? | ¿Dónde puedo encontrar mi horario de clases? | ¿Cuándo son los períodos de inscripción para cursos?",
  "¿Cuál es el calendario académico para este semestre?": "El calendario académico para este semestre se encuentra en la página oficial de la universidad. Puede acceder a ella entrando al siguiente enlace https://www.udb.edu.sv/udb/eventos",
  "¿Dónde puedo encontrar mi horario de clases?": "Puedes encontrar tu horario de clases en el portal estudiantil accediendo al siguiente enlace https://admacad.udb.edu.sv/PortalWeb solo ingresa tus credenciales correspondientes.",
//-------------------------------------------------------------------------------------
//Opcion 2 y sus respuestas
  "Recursos y Servicios del campus": "¿Dónde está la biblioteca y cuáles son sus horarios? | ¿Cómo puedo contactar al departamento de servicios estudiantiles? | ¿Hay algún evento importante en el campus esta semana?",
  "¿Dónde está la biblioteca y cuáles son sus horarios?": "Puedes entrar al sitio web de la biblioteca para conocer sus horarios e información https://biblio.udb.edu.sv/biblioteca/",
  "¿Cómo puedo contactar al departamento de servicios estudiantiles?":"Puede visitar el siguiente enlace para concer los servicios estudiantiles que ofrece la universidad https://www.udb.edu.sv/udb/pagina/servicios_estudiantiles",
//-------------------------------------------------------------------------------------
//Opcion 3 y sus respuestas
  "Apoyo y Bienestar Estudiantil": "¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales? | ¿Cuáles son los recursos disponibles para estudiantes con discapacidades? | ¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mi rendimiento académico?",
  "¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales?": "En la Universidad Don Bosco, puedes obtener apoyo si estás experimentando estrés o problemas emocionales a través del Departamento de Asistencia Psicopedagógica (DAP). Este departamento ofrece programas de intervenciones psicológicas y psicopedagógicas breves, enfocadas en el desarrollo de la personalidad y el carácter, disponibles para estudiantes que soliciten el servicio o sean referidos por profesores o tutores.",
  "¿Cuáles son los recursos disponibles para estudiantes con discapacidades?":" los recursos disponibles para estudiantes con discapacidades incluyen diversos programas de apoyo y servicios para garantizar que todos los estudiantes puedan acceder a la educación de manera equitativa. Algunos de estos recursos pueden incluir: Departamento de Apoyo y Bienestar Estudiantil, Servicios de Adaptación de Materiales Académicos, Accesibilidad Física en el Campus. Te recomendaría ponerte en contacto directamente con el Departamento de Apoyo Estudiantil o el Departamento de Asistencia Psicopedagógica de la universidad para obtener detalles más específicos sobre los recursos disponibles y cómo acceder a ellos.",
//-------------------------------------------------------------------------------------
//Opcion 3 y sus respuestas
  "Orientacion Sobre Carrera y desarrollo profesional": "¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera? | ¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae? | ¿Hay talleres disponibles para prepararme para entrevistas de trabajo?",
  "¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera?": "Para encontrar pasantías o prácticas profesionales relevantes para tu carrera en la Universidad, puedes seguir estos pasos: 1. Visitar el portal de la universidad, 2. Contactar al Departamento de Orientación Profesional, 3. Participar en ferias de empleo y eventos",
  "¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae?":"La Universidad Don Bosco ofrece varios recursos para ayudarte a escribir tu currículum vitae (CV) y mejorar tu perfil profesional. Estos son algunos de los recursos disponibles: 1. Asesoría y Talleres de Orientación Profesional, 2.Portal Estudiantil 3. Consultas Personalizadas",
  "¿Hay talleres disponibles para prepararme para entrevistas de trabajo?": "El Departamento de Orientación Profesional o la Oficina de Servicios Estudiantiles organiza talleres y sesiones de asesoría donde te ayudan a estructurar un currículum vitae acorde a tu carrera y experiencia. Estos talleres también te brindan consejos sobre cómo mejorar tu carta de presentación y cómo destacar tus habilidades.",
  //-------------------------------------------------------------------------------------
//Opcion 3 y sus respuestas
  "Vida Estudiantil y eventos sociales": "¿Qué clubes o actividades extracurriculares están disponibles en el campus? | ¿Hay alguna actividad interesante planeada para el fin de semana? | ¿Cuáles son las opciones de alimentación disponibles en el campus?",
  "¿Qué clubes o actividades extracurriculares están disponibles en el campus?": "La universidad te ofrece diversas actividades extracurriculares de las que puedes formar parte, como arte y cultura, asociaciones educativas o cursos puedes obtener mas informacion ingresando al portal estudiantil en el apartado Actividades Extra - Academicas https://admacad.udb.edu.sv/PortalWeb/ ",
  "¿Cuáles son las opciones de alimentación disponibles en el campus?": "El campus udb Soyapango cuenta con 4 chalets a dispocicion del estudiante donde puedes encotrar diversas opciones de alimentación a un precio accesible",
};

//MANEJO DE LAS PREGUNTAS O MENSAJES DEL USUARIO PARA BUSCAR COINCIDENCIAS CON LAS DEL ARRAY ASOCIATIVO
const Chatbot = () => {
  const [mensaje, setMensaje] = useState("");

  //MANEJAMOS EL ESTADO DEL CHAT
  const [chat, setChat] = useState([]);

  //USAMOS UNA REFERENCIA DE TIPO NULO
  const chatRef = useRef(null);

  //HACER QUE SE INICIE EL CHAT
  useEffect(()=>{
    setChat([{usuario:"Hola", bot:"¡Hola! Soy tu asistente virtual. Escribe 'opciones' para ver cómo puedo ayudarte." }]);
  }, []);


  const manejarEnvio = (opcion) => {
    const pregunta = opcion.trim(); 

    if (!pregunta) return;
    const respuesta = respuestas[pregunta] ? opcion : null;
    const nuevaRespuesta = respuesta
      ? respuestas[respuesta]
      : "Lo siento, no tengo información sobre eso. Intenta otra pregunta.";

    setChat([...chat, {bot: nuevaRespuesta, usuario: pregunta }]);
    setMensaje("");
  };

  //MANEJAMOS EL USO O EFECTO EN NUESTRA REFERENCIA PARA QUE EL SCROLL DLE CHAT SE MUEVA AUTOMATICAMENTE Y Se ejecuta cada vez que se actualiza el chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div className="container-principal">
      <header className="encabezado">
        <h2 className="titulo">Soporte Estudiantil -</h2>
      </header>

      {/* AQUI TENGO MI REFERENCIA INICIALIZADA PARA QUE MI DIV RESPETE ESE EFECTO */}
      <div  ref={chatRef} className="container-chat">

        {/* MAPEA EL CHAT PARA MOSTRARSE EN PANTALLA */}
        {chat.map((c, index) => (
          <div key={index} className="container-mensaje" >
            <div className="container-respuestas">
              <div className="div-vacio"></div>
              <div className="container-conversacion">
                <p className="text-blue-500 font-semibold">{c.usuario}</p>
              </div>
              <div className="icono">
                <img src="https://cdn-icons-png.flaticon.com/512/10109/10109875.png" alt="usuario" />
              </div>
            </div>
            <div className="container-respuestas">
              <div className="icono">
                <img src="https://img.icons8.com/?size=512&id=108832&format=png" alt="bot" />
              </div>
              <div className="container-conversacion">

                {/* HACE QUE LA RESPUESTAS QUE TENGAN | LAS HAGA EN UNA LISTA EN COLUMNA Y NO EN FILA Y TOMS EL VALOR DEL BOTON COMO LA PREGUNTA */}
                {c.bot.includes(" | ") ? (
                  <div className="lista">
                    {c.bot.split(" | ").map((item, i) => (
                      <button
                        key={i}
                        className="boton-opcion"
                        onClick={() => manejarEnvio(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-blue-500 font-semibold">{c.bot}</p>
                )}
              </div>
              <div className="div-vacio"></div>
            </div>
          </div>
        ))}
      </div>

      {/* MANEJO DEL FORMULARI PARA MANEJAR EL ENVIO DEL MENSAJE Y QUE COINCIDA CON EL ESPERADO O EL QUE ESTA EN EL ARRAY */}
      <form onSubmit={(e) => { 
      e.preventDefault();
      if (mensaje.trim()) manejarEnvio(mensaje); 
      }} className="flex">
      <textarea
          className="flex-1"
          placeholder="Escribe tu pregunta..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button className="boton-enviar">send</button>
      </form>
    </div>
  );
};

export default Chatbot;
