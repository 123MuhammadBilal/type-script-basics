// import React, { useState } from 'react';
import Persons from "./components/Persons";
import People from "./components/People";
import TodoTypeScript from "./components/TodoTypeScript";
import Fetching from './components/Fetching'
import Partial from "./components/Partial";
import Readoly from "./components/Readonly";
import Required from "./components/Required";
import Record from "./components/Record"

const personDetailsObj = {
  name: "ali",
  age: 22,
  isPass: true,
};

const people = [
  {
    name: "ali",
    age: 21,
  },
  {
    name: "ahmed",
    age: 22,
  },
  {
    name: "afnan",
    age: 23,
  },
  {
    name: "hanan",
    age: 24,
  },
];

function App() {
  return (
    <div className="App">
      <TodoTypeScript />
      <Persons personDetailsObj={personDetailsObj} />
      <People people={people} />
      <Fetching/>
      <Partial/>
      <Required/>
      <Readoly/>
      <Record/>
    </div>
  );
}

export default App;
