
import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from "../routes/rotas.jsx";
import App from '../main/App';


var hist = createBrowserHistory();

export default props => (
    <div>
        <Router history={hist}>

            <Route path='/' component={App} />
           
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} key={key} component={prop.component} />;
                })}
            </Switch>
        </Router>
    </div>
)



