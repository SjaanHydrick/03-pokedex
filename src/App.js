import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import LandingPage from './LandingPage.js';
import PokedexPage from './PokedexPage.js';
import PaginationPage from './PaginationPage.js'
import Detail from './Detail.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                        path = "/" 
                        exact render={(routerProps) => <LandingPage {...routerProps} />}
                        />
                        <Route path = "/pokemon" exact render={(routerProps) => <PokedexPage {...routerProps} />}
                        />
                        <Route path = "/pagination" exact render={(routerProps) => <PaginationPage {...routerProps} />}
                        />
                        <Route path = "/detail/:id" exact render={(routerProps) => <Detail {...routerProps} />}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
