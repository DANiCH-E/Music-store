import React, {useCallback, useEffect, useState} from "react";
import Cookies from 'js-cookie'
//import Header from "./header/header";
import {useDispatch, useSelector} from "react-redux";
// import './auth.css';

import {Link, useNavigate} from "react-router-dom";

import { Setusername, Setid, SetIsAuthentificated} from "../../redux/reducer";

import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";

export function Auth(){

    const [username1, setUsername] = useState('');
    const [password1, setPassword] = useState('');

    const [show, SetShow] = useState(true);

    const handleClose = () => {
        SetShow(false)
        authLinks()
    };
    const handleShow = () => SetShow(true);

    const navigate = useNavigate();

    

    const authLinks= useCallback(() => {
            navigate('/');
        }, [navigate]
    )

    async function checklogin() {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),

            }
        };
        const body = JSON.stringify({username: username1, password: password1})

        const res = await axios.post('http://127.0.0.1:8000/login', body, config)

        if (res.data.success){
            console.log(res.data.success)
            dispatch(Setusername(res.data.username))
            dispatch(Setid(res.data.id))
            dispatch(SetIsAuthentificated())
            localStorage.setItem("userid", res.data.id)
            authLinks()
            // Cookies.set('name', 'value')
            var cookies = document.cookie;

            console.log(cookies)


        }
        else{
            console.log(res.data.error)
            dispatch(Setusername(''))

        }


    }

    const dispatch = useDispatch();
    const handleClick = () => {
        checklogin()
    };


    return (
        <>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Авторизация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type="login" placeholder="Enter login" onChange ={(event) => setUsername(event.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="login" placeholder="Enter password" onChange ={(event) => setPassword(event.target.value)}/>
                    </Form.Group>
                    <div>
                        <Button onClick={handleClick} >ВОЙТИ</Button>
                    </div>
                    <div>
                        <Link to='/register'> Нет аккаунта?</Link>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default Auth;