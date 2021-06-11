import React, {FC} from 'react';
import {IUser} from "../interfaces";

interface UserListProps {
    users: IUser[]
}

export const UserList: FC<UserListProps> = ({users}) => {

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    {user.id}. {user.name} live in {user.address.city} on {user.address.street} street.
                </div>
            ))}
        </div>
    );
};
