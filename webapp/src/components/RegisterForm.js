import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function RegisterForm(props) {
    return (
        <Card bg="dark" style={{ color: "withe", width: '18rem', display: "inline-block" }}>
            <Card.Body>
                <Card.Title>Get your SOLID pod</Card.Title>
                <Button variant="primary" href="https://inrupt.net/register" block>Inrupt</Button>
                <Button variant="primary" href="https://solidcommunity.net/register" block>Solid Community</Button>
            </Card.Body>
        </Card>
    );
}

export default RegisterForm;