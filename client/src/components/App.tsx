import * as React from 'react';
import { FC, useState, ChangeEvent } from 'react';
import LogIn from '../components/Authenticate/LogIn';
import { SignUp } from '../components/Authenticate/SignUp';
import { Post } from './Post/Post';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



export const App: FC = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/'
                        component={LogIn}
                    />
                    <Route exact path='/signup' 
                        component={SignUp}
                    />
                    <Post username="hello" />
                </Switch>
            </Router>

        </div>
    )
}

