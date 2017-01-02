import React from 'react';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from '../layouts/Frame.js';

const routes = (
    <Router history = {hashHistory}>
        <Route path = "/" component = {Frame} >
            <IndexRoute component = {Home} />
            <Route path = "/detail/:id" component = {Detail} />   
        </Route>    
    </Router>
);
export  default routes;
