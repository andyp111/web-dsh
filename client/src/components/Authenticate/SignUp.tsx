import * as React from 'react';
import axios from 'axios';
import { useState, ChangeEvent, MouseEvent } from 'react';
import { ISignUp } from './Interfaces';

export const SignUp = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [level, setLevel] = useState<string>('Junior');
    // const [signUpInfo, setSignUpInfo] = useState<ISignUp>({username, password, email, level});

    const levelOptions: Array<string> = ['Junior', 'Mid', 'Senior'];

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "username") setUsername(event.target.value);
        if (event.target.name === "password") setPassword(event.target.value);
        if (event.target.name === "email") setEmail(event.target.value);
    }

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        let selected: string = event.currentTarget.value;
        setLevel(selected);
    }

    const signUpClick = (event: MouseEvent): void => {
        event.preventDefault();
        let signUpInfo: ISignUp = {
            username: username,
            password: password,
            email: email,
            level: level
        }

        axios.post<ISignUp>('/api/signup', signUpInfo)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error)
            })
        //axios will post
        //
    }
    
    return (
        <div className="signUp-container">
            <div className="signUp-forms">
                <input 
                    type="text"
                    placeholder="input your username..."
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="input your password..."
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="input your email..."
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <select value={level} onChange={handleSelectChange}>
                    {levelOptions.map((level, index) => {
                        return <option key={index} value={level}>
                            {level}
                        </option>
                    })}
                </select>

            </div>
            <div className="signup-button">
                    <button onClick={signUpClick}>Sign Up</button>
            </div>
        </div>
    )
}