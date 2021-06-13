import React, {FC, useEffect, useState} from 'react';
import axios from "axios";

import {ITodo} from "../interfaces";
import List from "../components/List";
import {TodoItem} from "../components/TodoItem";

export const TodoPage: FC = () => {

    const [todoArray, setTodoArray] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
            setTodoArray(response.data)
        } catch (e) {alert(e)}
    }

    return (
        <List
            items={todoArray}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
        />
    );
};
