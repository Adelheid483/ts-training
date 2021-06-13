import React, {useEffect, useState} from "react";
import axios from "axios";

import {Card} from "./components/Card";
import {IUser} from "./interfaces";
import List from "./components/List";
import {UserItem} from "./components/UserItem";

const App = () => {

    const [userArray, setUserArray] = useState<IUser[]>([]);

    useEffect(() => {fetchUsers()}, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUserArray(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <section>
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
        </section>
    );
};

export default App;
