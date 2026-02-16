import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ listOfTodos }) => {
  return (
    <>
      {listOfTodos.map((todo) => (
        <ul key={todo.id}>
          <span>{todo.id}</span>
          <li>
            <Link to={`/${todo.id}`}>{todo.content} </Link>
          </li>    
        </ul>
      ))}
    </>
  );
}