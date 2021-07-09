import * as React from 'react';
import { IHomeDataProps, IHomeData} from './Home.Interfaces';
import { CardImg, CardProps, CardColumns, Card, Row, Col, Button} from 'react-bootstrap';

const HomePostDisplayEntry = ({info}: IHomeDataProps) => {
    return (
        <Card bg={"light"} className="text-center">
            <Card.Header className="text-danger">
                {info.title}
            </Card.Header>
            <Card.Body>
                {info.body}
            </Card.Body>
            <Card.Footer className="text-muted">{info.datecreated}</Card.Footer>
            <Button variant="outline-danger" size="sm" >Save</Button>
        </Card>
    )
}

export default HomePostDisplayEntry