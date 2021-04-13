import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './../css/RegisterForm.css';
import { useTranslation } from 'react-i18next';

function RegisterForm(props) {
    const { t } = useTranslation();
    return (
        <Card className="register-card" bg="dark" style={{  }}>
            <Card.Body>
                <Card.Title className="register-title">{t('registerFormTitle')}</Card.Title>
                <Button className="register-btn" variant="primary" href="https://solidcommunity.net/register" block>Solid Community</Button>
            </Card.Body>
        </Card>
    );
}

export default RegisterForm;