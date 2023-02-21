import React from "react";
import ComponentB from "../pures/ComponentB";
import Data from "../../models/data.class";
import { Age } from "../../models/levels.enum";

function ComponentA() {
  const dataDefautl = new Data(
    "neider",
    "urbano",
    Age.Max,
    "julian@gmial.com",
    true
  );
  return (
    <div>
      <h1>Mis datos personales</h1>
      <ComponentB data={dataDefautl} />
    </div>
  );
}

export default ComponentA;
