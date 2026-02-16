import React, { useState, useEffect}from "react";
import { useParams } from "react-router-dom";
import { Delete } from "../Components/Card/delete";


export const Show = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch(`/api/${id}`).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    setTodo(data);
                });
            }
        });
    }, [id]);

    return (
        <>
        <h1>Todo Details</h1>
        {todo ? (
            <div>
                <p>Todo ID: {todo.id}</p>
                <p>Todo item:{todo.content}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        <Delete id={id} />
        </>
    )
}