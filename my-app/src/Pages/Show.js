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
        <div>
        <h1>Show Page</h1>
        {todo ? (
            <ul>
                <span>{todo.id}</span>
                <li>{todo.content}</li>
            </ul>
        ) : (
            <p>Loading...</p>
        )}
        <Delete id={id} />
        </div>
    )
}