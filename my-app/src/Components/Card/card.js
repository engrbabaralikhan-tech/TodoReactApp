import React from "react";

export const Card = ({ listOfTodos }) => {
  return (
    <>
      {listOfTodos.map((todo) => (
        <ul key={todo.id}>
          <span>{todo.id}</span>
          <li>{todo.content}</li>
          
        </ul>
      ))}
    </>
  );
}