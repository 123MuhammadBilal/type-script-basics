import React from "react";
interface read {
  name: string;
  age: number;
  isPass: boolean ;
}
// we can't reassign and redeclear if type is readonly 
const Readoly = () => {
  const userData: Readonly<read> = {
    name: "john",
    age: 44,
    isPass:true,
  };
  console.log('userData___',userData)
  return (
    <>
      <p className="people">Type Readonly</p>
      <div className="people">
        <p>
        we can't reassign and redeclear if type is readonly 
        </p>
      </div>
    </>
  );
};

export default Readoly;
