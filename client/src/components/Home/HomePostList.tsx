import * as React from 'react';
import HomePostDisplayEntry from './HomePostDisplayEntry';
import { IHomeData, IHomeDataProps } from './Home.Interfaces';
import { Card, CardDeck} from 'react-bootstrap';


const HomePostList = ({data}: IHomeDataProps) => {
    return (
        <CardDeck>
            {
                data.map((post, index) => {
                    console.log(typeof post)
                    return (
                        <HomePostDisplayEntry key={index} info={post} />
                    )
                })
            }
        </CardDeck>
    )
}


export default HomePostList

