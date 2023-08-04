import React, { useState } from "react";

type objTypes = {
    title: string | undefined,
    id:Number,
  };
const TodoTypeScript = () => {
  const [query, setQuery] = useState<string>();
  console.log(typeof(query))


      const obj:objTypes = {
        title : query ,
        id:Math.random()
    };
  const [todoList, setTodoList] = useState<any[]>([]);
  const onAddButtonClick = () => {

    setTodoList([...todoList, obj]);
    setQuery("");
  };
  return (
    <div className="people">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={onAddButtonClick}>Add</button>
      <div className="list">
        <ul>
          {todoList.map((elm) => {
            return <p key={elm.id}>{elm.title}</p>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoTypeScript;
