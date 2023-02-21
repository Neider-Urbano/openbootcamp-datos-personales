import React from "react";
import PropTypes from "prop-types";
import Data from "../../models/data.class";

function ComponentB({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.lastname}</p>
      <p>{data.age}</p>
      <p>{data.email}</p>
      <p>{data.connect ? "Contacto En Línea" : "Contacto No Disponible"}</p>
    </div>
  );
}

ComponentB.propTypes = {
  data: PropTypes.instanceOf(Data),
};

export default ComponentB;
