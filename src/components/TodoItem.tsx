import React, {FC} from 'react';
import {ITodo} from "../interfaces";

interface TodoItemProps {
    todo: ITodo;
    getTodo: (todo: ITodo) => void;
}

export const TodoItem: FC<TodoItemProps> = ({todo, getTodo}) => {
    return (
        <li onClick={() => getTodo(todo)}>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. Made {todo.title}.
        </li>
    );
};
