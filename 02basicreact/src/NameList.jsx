import React from "react";
import Person from "./Person"; // Importing the Person component

function NameList() {
  const persons = [
    { id: 1, name: "Amit", age: 24, skill: "JavaScript" },
    { id: 2, name: "Priya", age: 30, skill: "Python" },
    { id: 3, name: "Rahul", age: 21, skill: "Java" }
  ];

  return (
    <>
      {persons.map(person => (
        <Person person={person} /> 
      ))}
    </>
  );
}

export default NameList;
