import * as React from 'react';
import { useState, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';
import { ILogIn } from './Interfaces';

export const LogIn = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const [loginInfo, setLoginInfo] = useState<ILogIn>({username, password})

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "username") setUsername(event.target.value);
        if (event.target.name === "password") setPassword(event.target.value);
    }

    const loginClick = (event: MouseEvent): void => {
        event.preventDefault();
        let loginInfo: ILogIn = {
            username: username,
            password: password
        }

        axios.post('/api/login', loginInfo)
            .then((result) => {
                console.log(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="login-container">
            <div className="login-forms">
                <input
                    type="text" 
                    placeholder="username..."
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="password..."
                    name="password"
                    value={password}
                    onChange={handleChange} 
                />
            </div>
            <div className="login-button">
                <button onClick={loginClick}>Log In</button>
            </div>

        </div>
    )
}