import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./../css/RegisterForm.css";
import { useTranslation } from "react-i18next";

function RegisterForm() {
    const { t } = useTranslation();

    /*
        Component that renders the options for signing up and obtaining a Solid POD from one of two providers,
        consisting of buttons that link to their register pages
     */
    return (
        <Card className="register-card" bg="dark" style={{  }}>
            <Card.Body>
                <Card.Title className="register-title">{t("registerFormTitle")}</Card.Title>
                <Button className="register-btn" variant="primary" href="https://solidcommunity.net/register" block>Solid Community</Button>
                <Button className="register-btn" variant="primary" href="https://inrupt.net/register" block>Inrupt</Button>
            </Card.Body>
        </Card>
    );
}

export default RegisterForm;