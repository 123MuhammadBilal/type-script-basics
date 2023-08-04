import React from "react";
type personDetailsObjProps = {
  personDetailsObj: { name: string; age: number; isPass: boolean };
};
const Persons = (props: personDetailsObjProps) => {
  return (
    <>
      <p className="people">OBJECT</p>
      <div className="people">
        <p>{props.personDetailsObj.name}</p>
        <p>{props.personDetailsObj.age}</p>
        <p>{props.personDetailsObj.isPass}</p>
      </div>
    </>
  );
};

export default Persons;
