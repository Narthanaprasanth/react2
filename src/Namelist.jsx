import React from "react";
import Person from "./Person";

function Namelist() {
  const Names=['bruce','hugii','miniimini']
  const Persons = [
    {
      id: 1,
      name: "gorron",
      age: 20,
      skill: "react",
    },
    {
      id: 2,
      name: "norkin",
      age: 30,
      skill: "angular",
    },
    {
      id: 3,
      name: "quinn",
      age: 12,
      skill: "vue",
    },
  ];
const namelist=Names.map((Name,index)=><h2 key={index}>{index} {Name}</h2>)
  return <div>{namelist}</div>;
}
export default Namelist;



                                          