import React, {useEffect, useState} from "react";
import axios from "axios";

import {Card} from "./components/Card";
import {ITodo, IUser} from "./interfaces";
import List from "./components/List";
import {UserItem} from "./components/UserItem";
import {TodoItem} from "./components/TodoItem";
import {EventsExample} from "./components/EventsExample";

const App = () => {

    const [userArray, setUserArray] = useState<IUser[]>([]);
    const [todoArray, setTodoArray] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers();
        fetchTodos();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUserArray(response.data)
        } catch (e) {alert(e)}
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
            setTodoArray(response.data)
        } catch (e) {alert(e)}
    }

    return (
        <section>
            <EventsExample />
            <Card
                width='200px'
                height='200px'
                onClickHandler={(num) => console.log('Click', num)}
            >
                <button>Btn</button>
                <p>Lorem. Amet aperiam atquxpedita inventore iure
                    molestiae non obcasequi voluptate?</p>
            </Card>
            <List items={userArray} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}/>
            <List items={todoArray} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}/>
        </section>
    );
};

export default App;
