import React from "react";
import {Card} from "./components/Card";
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import {UsersPage} from "./pages/UsersPage";
import {TodoPage} from "./pages/TodoPage";

const App = () => {
    return (
        <BrowserRouter>
            <section>
                <nav style={{background: 'lightgrey', padding: '10px 0'}}>
                    <NavLink to='/users' style={{marginRight: '20px'}}>Users</NavLink>
                    <NavLink to='/todos'>Todos</NavLink>
                </nav>
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
            </section>
        </BrowserRouter>
    );
};

export default App;
