import React from "react";
type PeopleProps = {
  people: {
    name: string;
    age: number;
  }[];
};
const People = ({ people }: PeopleProps) => {
  return (
    <div>
      <p className="people">Array</p>
      {people.map((item) => {
        return (
          <div className="people">
            <p>{"Name : " + item.name}</p>
            <p>{"Age : " + item.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default People;
