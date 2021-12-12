import React from 'react'
import { BrowserRouter as Router, Route, Switch, MemoryRouter } from "react-router-dom";
import "../Assets/CSS/AdminDashboard.css";
import AdminNav from '../Components/AdminNav'
import OpeningForm from '../Components/OpeningForm'

export default function AdminDashboard() {
    return (
        <Router>
            <AdminNav />
            <h1 className="adminHeading">Admin Dashboard</h1>
            <Switch>
                <Route path = "/admin/post/opening" exact component={OpeningForm} />
            </Switch>
        </Router>
    )
}
