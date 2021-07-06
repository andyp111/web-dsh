import axios from 'axios';
import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { IHomeData } from './Home.Interfaces';
import HomePostDisplay from './HomePostDisplay';

export const Home = () => {

    const [sessionId, setSessionId] = useState<String>('');
    const [postData, setPostData] = useState<IHomeData[]>([]);

    useEffect(() => {
        let idCookie: string[] = document.cookie.split('=');
        let id: string = idCookie[1];

        axios.get<IHomeData[]>(`/api/home/${id}`)
            .then((result) => {
                console.log(result.data)
                setPostData(result.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])

    return (
        //theo map through postData return new component 
        <div className="home-container">
            <div>
                nav bar goes here
            </div>
            <div>
                <HomePostDisplay data={postData}/>
            </div>
        </div>
    )
}