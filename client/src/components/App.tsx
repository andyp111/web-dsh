import * as React from 'react';
import { FC, useState, ChangeEvent } from 'react';
import { LogIn } from '../components/Authenticate/LogIn';
import { SignUp } from '../components/Authenticate/SignUp';


export const App: FC = () => {
    return (
        <div>
            <LogIn />
            <SignUp />
        </div>
    )
}

