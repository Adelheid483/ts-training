import React from "react";
import {Card} from "./components/Card";
import {UserList} from "./components/UserList";
import {IAddress, IUser} from "./interfaces";

const App = () => {

    const userArray: IUser[] = [
        {
            id: 1,
            name: 'string',
            email: 'string@mail.by',
            address: {
                city: 'Minsk',
                street: 'mavra',
                zipcode: '220015',
            },
        },
        {
            id: 2,
            name: 'string',
            email: 'string@mail.by',
            address: {
                city: 'Berlin',
                street: 'mavra',
                zipcode: '220015',
            },
        }
    ];

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
            <UserList users={userArray}/>
        </section>
    );
};

export default App;
