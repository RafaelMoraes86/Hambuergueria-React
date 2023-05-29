import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./containers/Home";
import Orders from "./containers/Orders";

function Routes(){
    
    return(
        <Router>
            
            <Switch>
                
                <Route exact path="/" component={ Home }/>
                <Route exact path="/pedidos" component={ Orders }/>
            
            </Switch>

        </Router>
    )   
};

export default Routes;

