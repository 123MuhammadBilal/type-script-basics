import React from "react";
interface Par {
  name: string;
  age: number;
  //in partial we can you the optional sign 
  isPass?: boolean;
}
const Partial = () => {
  const userData: Partial<Par> = {
    name: "john",
    age: 44,
  };
  return (
    <>
      <p className="people">Type Partial</p>
      <div className="people">
        <p>
          name {userData.name} and age is{userData.age}{" "}
        </p>
      </div>
    </>
  );
};

export default Partial;
