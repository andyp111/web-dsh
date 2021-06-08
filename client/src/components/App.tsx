import * as React from 'react';
import { FC, useState, ChangeEvent } from 'react';
import { LogIn } from '../components/Authenticate/LogIn';
import { SignUp } from '../components/Authenticate/SignUp';
import { Post } from './Post/Post';


export const App: FC = () => {
    return (
        <div>
            <LogIn />
            <SignUp />
            <Post username="hello"/>
        </div>
    )
}

