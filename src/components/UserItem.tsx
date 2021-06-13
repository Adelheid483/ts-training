import React, {FC} from 'react';
import {IUser} from "../interfaces";

interface UserItemProps {
    user: IUser
}

export const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <li>
            {user.id}. {user.name} live in {user.address.city} on {user.address.street} street.
        </li>
    );
};
