import React, {FC} from 'react';
import {IUser} from "../interfaces";

interface UserItemProps {
    user: IUser;
    getUser: (user: IUser) => void;
}

export const UserItem: FC<UserItemProps> = ({user, getUser}) => {
    return (
        <li onClick={() => getUser(user)}>
            {user.id}. {user.name} live in {user.address.city} on {user.address.street} street.
        </li>
    );
};
