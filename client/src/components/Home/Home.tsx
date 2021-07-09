import axios from 'axios';
import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { IHomeData } from './Home.Interfaces';
import HomePostDisplay from './HomePostList';
import { Navbar, Nav, Button, NavItem, FormControl, NavDropdown, Container, CardGroup, Row, InputGroup} from 'react-bootstrap';

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
        <Container className="home-container">
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand className="text-danger" href="Home">Webdash</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar>
                            <Nav.Link className="text-danger" href="SignUp">Sign Up</Nav.Link>
                            <Nav.Link className="text-danger" href="/">Log In</Nav.Link>
                            <NavDropdown variant={"danger"} title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Post">Post</NavDropdown.Item>
                            <NavDropdown.Item href="#Feed">Feed</NavDropdown.Item>
                            <NavDropdown.Item href="#Profile">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Search">Surprise</NavDropdown.Item>
                            </NavDropdown>
                            <InputGroup className="mb-3" size="sm">
                                <FormControl placeholder="Search for a Post..."/>
                                <Button variant="outline-secondary" id="button-addon1" onClick={() => console.log('hello')}>Search</Button>
                            </InputGroup>
                        </Navbar>
                        </Navbar.Collapse>
                        <Navbar.Text className="text-danger justify-content-end">Signed in as: <a href="#Profile">Theo</a></Navbar.Text>
                    </Container>
                </Navbar>
            </div>
            <br/><br/>
            <HomePostDisplay data={postData}/>
        </Container>
    )
}