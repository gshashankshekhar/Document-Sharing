import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'

const Login = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
        console.log("------", allEntry, newEntry);
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        };
        axios.post('http://localhost:3001/test/form', newEntry, { headers })
            .then(res => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            <div className='menubar navbar navbar-expand-sm bg-dark navbar-dark justify-content-end'>
                <Nav defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Admin Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#">Reviewer Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#">About Us </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className='main-login d-flex justify-content-center'>
                <div className='box-login'>
                    <h2> Admin Login</h2>
                    <Form action="" onSubmit={submitForm}>
                        <fieldset>
                            <legend>
                                Sign in to your account
                            </legend>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <a href="forgot.js">
                                Forgot Password ?
                            </a>
                            <div className='form-action'>
                                <Button variant="primary" type="submit">Login</Button>
                            </div>
                            <div className="new-account">
                                Don't have an account yet?
                                <a href='Reg.js'> Create an account </a>

                            </div>
                        </fieldset>
                    </Form>

                </div>
            </div>

        </>
    )
}

Login.propTypes = {}

export default Login