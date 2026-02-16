import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Delete = ({ id }) => {

const navigate = useNavigate();
  const deleteTodo = () => {
    fetch(`/api/${id}`, {
      method: "DELETE",
    }).then(response => {
      if (response.ok) {
        console.log(`Todo with id ${id} deleted successfully`);
        navigate("/");
      } else {
        console.log(`Failed to delete todo with id ${id}`);
      }
    });
  }
  return (
    <>
    <button onClick={deleteTodo}>Delete</button> 
    <hr />
    <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}