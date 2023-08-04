import React, { useState } from "react";

const Fetching = () => {
  const [fetchdata, setFetchedData] = useState<any>();
  console.log('fetchdata___',fetchdata)
  async function getUsers(): Promise<Array<{ name: any }>> {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return response.json();
  }

  // type User = Awaited<ReturnType<typeof getUsers>>[];

  async function getUserNames() {
    const users = await getUsers();
    // const names: Array<any>[] = await Promise.all(
    //     users?.map(async (user: User) => {
    //         const name = user.userId;
    //         return name;
    //     })
    // );
    // setFetchedData({users:any})
    // console.log(users);
    setFetchedData(users);
  }

  getUserNames();

  return (
    <div>
          {/* <>
            <p>{fetchdata.userId}</p>
            <p>{fetchdata.id}</p>
          </> */}
    </div>
  );
};

export default Fetching;
