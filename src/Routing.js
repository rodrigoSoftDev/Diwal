import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";

import { isLogged } from "./Utils/helpers";

const Routes = () => {
    
    const toDash = component => isLogged() ? <Redirect to="/dashboard" /> : component; 
    const toLogin = component => !isLogged() ? <Redirect to="/login" /> : component; 

    return (
        <div className="container ">

            <div className="row" style={{ height: "50px"}}>
                <div className="col-12">
                    <Header />
                </div>
            </div>

            <div className="row" style={{ height: "87vh"}}>
                <div className="col-12">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/login"> { toDash(<Login />) } </Route> 
                            <Route path="/register"> { toDash(<Register />) } </Route>
                            <Route path="/dashboard"> { toLogin(<Dashboard />) } </Route> 
                        </Switch>
                    </BrowserRouter>
                </div>
             </div>

             <div className="row">
                 <div className="col-12">
                    <Footer />
                </div>
            </div>

        </div>
    )
}
export default Routes;
