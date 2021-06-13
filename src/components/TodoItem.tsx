import React, {FC} from 'react';
import {ITodo} from "../interfaces";

interface TodoItemProps {
    todo: ITodo
}

export const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <li>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. Made {todo.title}.
        </li>
    );
};
