import React, { useEffect, useState } from "react";

const ClockFunctions = () => {
  const [user, setUser] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  });

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setUser((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad: edad,
      };
    });
  }
  return (
    <div>
      <h2>
        Hora Actual:
        {user.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {user.nombre} {user.apellidos}
      </h3>
      <h1>Edad: {user.edad}</h1>
    </div>
  );
};

export default ClockFunctions;
