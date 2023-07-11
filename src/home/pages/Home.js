import React from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap'

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <Card>
                        <Card.Img variant="top" src="https://react-bootstrap.netlify.app/img/logo.svg" />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Img variant="top" src="https://react-bootstrap.netlify.app/img/logo.svg"/>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;