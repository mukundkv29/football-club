import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Card, Button } from 'react-bootstrap';


import { DUMMY_NEWS } from '../../data/dummy-news'

import './Home.css'

const Home = () => {

    const [newsIndex, setNewsIndex] = useState(0);
    
    const newsIndexHandler = () =>{
        setNewsIndex( prevIndex => (prevIndex+1)%3 );
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            setNewsIndex(prevIndex=>(prevIndex+1)%3);
        }, 3500);
        return ()=>{
            clearInterval(timer);
        }
    },[]);

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
                </Col>
                <Col sm={4}>
                    {/* <Card>
                        <Card.Img variant="top" src="https://react-bootstrap.netlify.app/img/logo.svg"/>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Home;