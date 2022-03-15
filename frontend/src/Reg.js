import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
const Login = props => {
    return (
        <>
        <div className='menubar navbar navbar-expand-sm bg-dark navbar-dark justify-content-end'>
            <Nav defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="Login.js">Admin Login</Nav.Link>
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
                    <h2>Registration Form</h2>
                    <Form>
                        <fieldset>
                            <legend>
                                Fill Your Details
                            </legend>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Mobile no.</Form.Label>
                                <Form.Control type="tel" placeholder="Enter Mobile no." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            
                            <div className='form-action'>
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </div>
                            <div className="new-account">
                                Already have an account.
                                <a href='Login.js'> Please Login </a>

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