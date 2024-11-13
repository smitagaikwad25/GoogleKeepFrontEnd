import React from "react";
import ClassF from "./classF";

export let customCOntext = React.createContext();
export let customCOntextTow = React.createContext();

const ClassE = () => {
  return (
    <>
      <customCOntext.Provider value={"hi"}>
        <customCOntextTow.Provider value={"i did it"}>
          <ClassF />
        </customCOntextTow.Provider>
      </customCOntext.Provider>
    </>
  );
};
export default ClassE;
