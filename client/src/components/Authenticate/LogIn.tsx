import * as React from 'react';
import { useState, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';
import { ILogIn } from './Authenticate.Interfaces';
import { withRouter, useHistory } from 'react-router-dom';

const LogIn = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
    // const [loginInfo, setLoginInfo] = useState<ILogIn>({username, password})
    let history = useHistory();
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
                history.push('/home');
            })
            .catch((error) => {
                setInvalidPassword(true);
            })
    }

    const onSwitchClick = (event: MouseEvent): void => {
        event.preventDefault();
        window.location.href = '/signup';
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
            {invalidPassword && <div>incorrect password</div>}
            <div className="login-switch">
                <p>Don't have an account? <a onClick={onSwitchClick}>Sign Up Here</a></p>
            </div>

        </div>
    )
}

export default withRouter(LogIn);