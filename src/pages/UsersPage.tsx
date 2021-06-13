import React, {FC, useEffect, useState} from 'react'
import axios from "axios";

import {IUser} from "../interfaces";
import List from "../components/List";
import {UserItem} from "../components/UserItem";

export const UsersPage: FC = () => {

    const [userArray, setUserArray] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUserArray(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            items={userArray}
            renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
        />
    );
};
