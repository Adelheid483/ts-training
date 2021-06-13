import React, {FC, useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {IUser} from "../interfaces";
import axios from "axios";

interface UserItemParams {
    id: string;
}

export const UserItemPage: FC = () => {

    const [userItem, setUserItem] = useState<IUser | null>(null);
    const params = useParams<UserItemParams>();
    const history = useHistory();

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUserItem (response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h3>User {userItem?.name} page</h3>
            <div>{userItem?.email}</div>
            <div>Lives in {userItem?.address.city} city on {userItem?.address.street} street</div>
        </div>
    );
};
