import React, {FC} from 'react';
import {IUser} from "../interfaces";
import {UserItem} from "./UserItem";

interface UserListProps {
    users: IUser[]
}

export const UserList: FC<UserListProps> = ({users}) => {

    return (
        <ul>
            {users.map((user) => <UserItem user={user} key={user.id} />)}
        </ul>
    );
};
