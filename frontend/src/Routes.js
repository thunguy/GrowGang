import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Homepage, About } from './views';


const Routes = () => {
    return (
        <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route exact path='/home'> <Homepage /> </Route>
            <Route exact path='/about'> <About /> </Route>
            
            {/* <WithNavigationBar exact path='/patients/dashboard' navbar={PatientNavigationBar} component={PatientDashboard}/> */}
        </Switch>
    )
}

export default Routes;