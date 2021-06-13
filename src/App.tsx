import React from "react";
import {BrowserRouter, Route, NavLink} from "react-router-dom";

import {Card} from "./components/Card";
import {EventsExample} from "./components/EventsExample";
import {UsersPage} from "./pages/UsersPage";
import {TodoPage} from "./pages/TodoPage";
import {UserItemPage} from "./pages/UserItemPage";
import {TodoItemPage} from "./pages/TodoItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <section>
                <nav style={{background: 'lightgrey', padding: '10px 0'}}>
                    <NavLink to='/users' style={{marginRight: '20px'}}>Users</NavLink>
                    <NavLink to='/todos'>Todos</NavLink>
                </nav>
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

                <Route path={'/users'} exact component={UsersPage}/>
                <Route path={'/todos'} exact component={TodoPage}/>
                <Route path={'/users/:id'} component={UserItemPage}/>
                <Route path={'/todos/:id'} component={TodoItemPage}/>
            </section>
        </BrowserRouter>
    );
};

export default App;
