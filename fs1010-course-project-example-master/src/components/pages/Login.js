import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { NavLink as RouteLink } from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({username, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }

    return (
        <Container className="mainBody">
        {!auth && 
          <Card className="error">
            <CardBody >
                <CardText className="text-white m-0">Invalid credentials, please try again</CardText>
            </CardBody>
        </Card>
        }
        <Form className="mainArea formLogin" onSubmit={loginSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label className="signIntitle" for="usernameEntry">Username</Label>
                <Input type="text" name="username" id="usernameEntry" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className="signIntitle" for="passwordEntry">Password</Label>
                <Input type="password" name="password" id="passwordEntry" placeholder="Valid Password" onChange={e => setPassword(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>
          <Button className="submitButton">Sign in</Button>
          <Button className="signUpButton" tag={RouteLink} to="/SignUp">Sign up</Button>
        </Form></Container>
    )
}

export default Login