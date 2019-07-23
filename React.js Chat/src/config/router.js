import React from 'react';

import * as Routes from '../components/index'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navigations() {
    return (
        //this.props.history.push('/dashboard')
        <Router>             
            <div>                
               
                <Route exact path="/" component={Routes.Login} />
                <Route exact path="/SignUp" component={Routes.SignUp} />
                <Route exact path="/Home" component={Routes.Home} />
                <Route exact path="/Chat:id" component={Routes.Chat} />
                
            </div>            
        </Router>
    );
}

export default Navigations;