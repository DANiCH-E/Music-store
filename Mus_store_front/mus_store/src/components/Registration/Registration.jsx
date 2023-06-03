import React, { useCallback, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { useSelector } from "react-redux";
// import './Registration.css';

import { Link, useNavigate } from "react-router-dom";
import { checkAuthenticated } from "./checkAuthenticated";
import { Setauther, Setid, Setusername } from "../../redux/reducer";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";

export function Registration() {
    const [username1, setUsername] = useState('');
    const [password1, setPassword] = useState('');
    const [email1, setEmail] = useState('');
    const navigate = useNavigate()

    const [show, SetShow] = useState(true);

    const handleClose = () => {
        SetShow(false)
        navigate('/')
    };
    const handleShow = () => SetShow(true);

    useEffect(() => {
        checkAuthenticated();
    }, []);

    const authLinks = useCallback(() => {
        navigate('/login');
    }, [navigate]
    )

    async function booking() {
        const request = {
            // method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            // body: JSON.stringify({username: username1, password: password1})
        }
        const body = JSON.stringify({ username: username1, password: password1, email: email1 })
        const res = await axios.post('http://127.0.0.1:8000/api/register/', body, request)
        // fetch("http://127.0.0.1:8000/api/register/", request);
        if (res.data.success) {
            console.log(res.data.success)
            authLinks()

        }
    };


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Логин</Form.Label>
                            <Form.Control type="login" placeholder="Enter login" onChange={(event) => setUsername(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="login" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                        </Form.Group>
                        <div>
                        <Button className="btn btn-primary mt-10" onClick={booking} > <div className='zar'>ЗАРЕГИСТРИРОВАТЬСЯ</div></Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>

    );
}

export default Registration;