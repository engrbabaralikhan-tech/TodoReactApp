import React, { useState, useEffect } from "react";
import { Card } from "../Components/Card/card";
import { Form } from "../Components/Form/form";

export const TodoPage = () => {
  const [todos, setTodo] = useState([]);
  const [addTodo, setAddTodo] = useState('');

  const fetchData = () => {
    fetch("/api").then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(data => setTodo(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormChange = (inputValue) => {
    setAddTodo(inputValue)
  }

  const handleFormSubmit = async () => {
    const response = await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        content: addTodo
      })
    });

    if (response.ok) {
      const message = await response.json();
      console.log(message);
      setAddTodo(''); // Clear the input field after successful submission
      fetchData();
    }
  };


  return (
    <>
      <h1>Todo List</h1>
      <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
      <Card listOfTodos={todos} />
    </>
  )
}