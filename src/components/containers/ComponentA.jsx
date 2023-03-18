import React from "react";
import ComponentB from "../pures/ComponentB";
import Data from "../../models/data.class";
import { Age } from "../../models/levels.enum";
import ClockClass from "./ClockClass";
import ClockFunctions from "./ClockFunctions";

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
      <div style={{ display: "flex", gap: "100px" }}>
        <div>
          <h1>Clock - component class</h1>
          <ClockClass />
        </div>
        <div>
          <h1>Clock - components funtions</h1>
          <ClockFunctions />
        </div>
      </div>
    </div>
  );
}

export default ComponentA;
