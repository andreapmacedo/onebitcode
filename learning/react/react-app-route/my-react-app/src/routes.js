import React from "react";
import {BrowserRouter, Route } from 'react-router-dom';
import PlantesScreen from "./screens/planets";
import Planets from "./components/planets";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ='/' component={PlantesScreen}/>
        </Switch>
    </BrowserRouter>
)

export default Routes
