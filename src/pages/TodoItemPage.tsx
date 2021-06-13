import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../interfaces";
import {useParams, useHistory} from "react-router";
import axios from "axios";

interface TodoItemParams {
    id: string;
}

export const TodoItemPage: FC = () => {

    const [todoItem, setTodoItem] = useState<ITodo>();
    const params = useParams<TodoItemParams>();
    const history = useHistory();

    useEffect(() => {
        fetchTodo();
    }, []);

    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id);
            setTodoItem(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/todos')}>Back</button>
            <h3>Title: Made {todoItem?.title}</h3>
            <div>
                Comleted status: <input type="checkbox" checked={todoItem?.completed}/>
            </div>
        </div>
    );
};
