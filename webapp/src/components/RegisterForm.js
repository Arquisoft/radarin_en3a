import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './../css/RegisterForm.css';

function RegisterForm(props) {
    return (
        <Card className="register-card" bg="dark" style={{  }}>
            <Card.Body>
                <Card.Title className="register-title">Get your SOLID pod</Card.Title>
                <Button className="register-btn" variant="primary" href="https://inrupt.net/register" block>Inrupt</Button>
                <Button className="register-btn" variant="primary" href="https://solidcommunity.net/register" block>Solid Community</Button>
            </Card.Body>
        </Card>
    );
}

export default RegisterForm;