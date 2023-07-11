import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Card, Button, Figure } from 'react-bootstrap';


import { DUMMY_NEWS } from '../../data/dummy-news'
import { DUMMY_FIXTURES } from '../../data/dummy-fixtures';

import './Home.css'

const Home = () => {

    const [newsIndex, setNewsIndex] = useState(0);
    const [fixIndex, setFixIndex] = useState(0);

    const newsIndexHandler = () => {
        setNewsIndex(prevIndex => (prevIndex + 1) % 3);
    }
    const fixIndexHandler = () => {
        setFixIndex(prevIndex => (prevIndex + 1) % 3);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setNewsIndex(prevIndex => (prevIndex + 1) % 3);
        }, 3500);
        return () => {
            clearInterval(timer);
        }
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setFixIndex(prevIndex => (prevIndex + 1) % 3);
        }, 3000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const fixtureDate = new Date(DUMMY_FIXTURES[fixIndex].date);
    const monthName = fixtureDate.toLocaleString('en-US', { month: 'long' });
    const formattedDate = `${fixtureDate.getDate()} ${monthName} ${fixtureDate.getFullYear()}, ${fixtureDate.toLocaleTimeString()}`;

    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <Card border='primary'>
                        <Card.Img variant="top" src={DUMMY_NEWS[newsIndex].imageURL} />
                        <Card.Body>
                            <Card.Header className='card-header' >
                                {DUMMY_NEWS[newsIndex].headline}
                            </Card.Header>
                        </Card.Body>
                        <Button variant='info' onClick={newsIndexHandler}>Next</Button>
                    </Card>
                </Col >
                <Col sm={4}>
                    <Card className="text-center" border='primary'>
                        <Card.Header>Upcoming Fixtures</Card.Header>
                        <Card.Body>
                            <Card.Title>{DUMMY_FIXTURES[fixIndex].teamHome.team}</Card.Title>
                            <Figure>
                                <Figure.Image
                                    width={50}
                                    height={50}
                                    alt={DUMMY_FIXTURES[fixIndex].teamHome.team}
                                    src={DUMMY_FIXTURES[fixIndex].teamHome.logo}
                                />
                            </Figure>
                            <Card.Text>
                                VS
                            </Card.Text>
                                <Figure.Image
                                    width={50}
                                    height={50}
                                    alt={DUMMY_FIXTURES[fixIndex].teamAway.team}
                                    src={DUMMY_FIXTURES[fixIndex].teamAway.logo}
                                />
                            <Card.Title>{DUMMY_FIXTURES[fixIndex].teamAway.team}</Card.Title>

                            <Button variant="primary" onClick={fixIndexHandler}>Next Fixture</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">{formattedDate}</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;