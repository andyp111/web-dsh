import * as React from 'react';
import { FC, useState, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';
import { IPost } from './Interfaces';


interface Props {
    username: string
}

export const Post = (username: Props) => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const handle = username;
    //create an image slider depending on image amount

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "title") setTitle(event.target.value);
    }

    const bodyChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        if (event.target.name === "body") setBody(event.target.value);
    }

    const onPostClick = (event: MouseEvent): void => {
        alert('posted')
    }

    return (
        <div className="post-container">
            <div className="post images">
                <p>image goes here</p>
            </div>
            <div className="post-title">
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                    value={title}
                />
            </div>
            <div className="post-body">
                <textarea
                    value={body}
                    name="body"
                    onChange={bodyChange}
                />
            </div>
            <div className="post-button">
                <button onClick={onPostClick}>Post</button>
            </div>
        </div>
    )
}