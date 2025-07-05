import React from "react";
import Person from "./Person";

function Namelist() {
  const names = ["bruce", "calik", "yumm"];
  const persons = [
    {
      id: 1,
      name: "bruice",
      age: 29,
      skill: "react",
    },
    {
      id: 2,
      name: "Alicce",
      age: 26,
      skill: "Angular",
    },
    {
      id: 3,
      name: "celine",
      age: 20,
      skill: "js",
    },
  ];
  const namelist = names.map((name,index) => <h2 key={index}> {index} {name}</h2>);

  return <div>{namelist}</div>;
}

export default Namelist;


