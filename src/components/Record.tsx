import React from "react";
interface rec {
  name: string;
  age: number;
  isPass: boolean ;
}
//required two parameters  type  and interface
// we decler object properties in interface and type of objects declear in 
type prop = "user1" | "user2" | "user3";
const Required = () => {
  const userData: Record<prop , rec > = {
    user1:{ name : "john" , age : 44, isPass:true},
    user2 :{ name : "john" , age : 44, isPass:true},
    user3: { name : "john" , age : 44, isPass:true},
  };
  return (
    <>
      <p className="people">Type Record</p>
      <div className="people">
        <p>
         USER1 :: name {userData.user1.name} and age is{userData.user1.age}<br></br>
         USER2 :: name {userData.user2.name} and age is{userData.user2.age}<br></br>
         USER3 :: name {userData.user3.name} and age is{userData.user3.age}<br></br>
        </p>
      </div>
    </>
  );
};

export default Required;
