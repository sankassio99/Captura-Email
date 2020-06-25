import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import capEmail from "./capEmail/App"
import adminHome from "./adminHome"
import sentEmail from "./sentEmail.js"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={capEmail} />
                <Route path="/adminHome" component={adminHome} />
                <Route path="/sentEmail" component={sentEmail} />
            </Switch>
        </BrowserRouter>   
    )
}