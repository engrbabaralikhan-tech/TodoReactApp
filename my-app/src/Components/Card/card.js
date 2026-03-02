import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

export const Card = ({ listOfTodos }) => {
  return (
    <>
      <ul className={styles.cardContainer}>
      {listOfTodos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.id}</span>
            <Link to={`/${todo.id}`}>{todo.content} 
            </Link>
          </li>    
      ))}
      </ul>
    </>
  );
}