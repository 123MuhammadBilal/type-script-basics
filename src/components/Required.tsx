import React from "react";
interface req {
  name: string;
  age: number;
  isPass: boolean ;
}
// Required type required all properties that are mentioned in the 'interface'
const Required = () => {
  const userData: Required<req> = {
    name: "john",
    age: 44,
    isPass:true,
  };
  return (
    <>
      <p className="people">Type Required</p>
      <div className="people">
        <p>
          name {userData.name} and age is{userData.age}{" "}
        </p>
      </div>
    </>
  );
};

export default Required;
