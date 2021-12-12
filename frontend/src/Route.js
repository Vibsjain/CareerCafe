import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AdminDashboard from './Pages/AdminDashboard';
import HomePage from './Pages/HomePage';

const FinalRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component={HomePage} />
                <Route path = "/admin/post/opening" exact component={AdminDashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default FinalRoutes;