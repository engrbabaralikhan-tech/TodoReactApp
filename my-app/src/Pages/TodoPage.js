import React, { useState, useEffect } from "react";
import { Card } from "../Components/Card/card";
import { Form } from "../Components/Form/form";

export const TodoPage = () => {
  const [todos, setTodo] = useState([]);
  const [addTodo, setAddTodo] = useState('');

  // fetch data from the backend and set it to the state
  const fetchData = () => {
    fetch("/api").then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(data => setTodo(data));
  }

  // fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // handle form change
  const handleFormChange = (inputValue) => {
    setAddTodo(inputValue)
  }

  // handle form submit
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

    // if the response is ok, fetch the updated list of todos and clear the input field
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