import React from "react";
import Person from "./Person"; // Importing the Person component

function NameList() {
    const names = ['sanjay', 'gopal', 'raghav', 'sanjay']
    const nameList = names.map((name, index)=><h2 key = {index}>{index} {name}</h2>)
//   const persons = [
//     { id: 1, name: "Amit", age: 24, skill: "JavaScript" },
//     { id: 2, name: "Priya", age: 30, skill: "Python" },
//     { id: 3, name: "Rahul", age: 21, skill: "Java" }
//   ];

  return (
    <>
      {/* {persons.map(person => (
        <Person key={person.id} person={person} /> 
      ))}  */}

    <div>{nameList}</div>
    </>
  ); 
}

export default NameList;


// key is special string attribute , included creating list of elements
// keys give the element a stable identity
// keys help react identify which item have changed, are added or removed

// index as key anti-pattern
// TUTORIAL FROM CODEVOLUTION

// when to use index as a key? 3 below conditions:
// the items doesn't have unique id
// list is static, won't change
// list will never be reordered or filtered

// avoid using index as a key
