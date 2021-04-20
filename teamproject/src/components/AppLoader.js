import React from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import nasaPic from '../assets/nasa.jpg';
import weatherPic from '../assets/weather.jpg';

const AppLoader = (props) => {

    const createNasa = (e) => {
        props.setIsNasa(true)
        props.setIsWeather(false)
    }

    const createWeather = (e) => {
        props.setIsNasa(false)
        props.setIsWeather(true)
    }

    return (
        <Container>
            <Row className = "Row">
                <Col md = '3'>
                    <Card>
                        <CardImg top width="200px" src = {nasaPic} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">NASA API</CardTitle>
                            <CardText>This will show an image of your geolocation</CardText>
                            <Button onClick = {createNasa}>Load it!</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md = '3'>
                    <Card>
                        <CardImg top width="200px" src = {weatherPic} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Weather API</CardTitle>
                            <CardText>This should load the weather in your area</CardText>
                            <Button onClick = {createWeather}>Load it!</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AppLoader;