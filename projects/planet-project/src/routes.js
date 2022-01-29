import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PlanetsScreen from './screens/planets'
import Planet from './components/planets/planet'


const Routes = () => {
    <BrowserRouter>
        <Switch>
            <Route exact path='/' componet={PlanetsScreen}/>
        </Switch>
    </BrowserRouter>
}

export default Routes;