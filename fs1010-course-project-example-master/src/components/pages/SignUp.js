import { Container, Col, Row, Button, Label, Input } from 'reactstrap'
import React, { useState } from 'react'
import { Form, FormGroup} from 'reactstrap'



const Create = () => {
    const [name, setName] = useState("")
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    const signUp = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({name, userName, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
          console.log(`Congrats! Submission submitted with id: ${payload.id}`)
          alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
    }

    return (
        <Container className="mainBody">
        <Form className="mainArea formLogin"  onSubmit={signUp}>
          <Row form>
          <Col md={6}>
              <FormGroup>
                <Label className="signIntitle" for="passwordEntry">Name</Label>
                <Input type="text" name="name" id="" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className="signIntitle" for="usernameEntry">Username</Label>
                <Input type="text" name="username" id="usernameEntry" placeholder="Username" value={userName} onChange={e => setUsername(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className="signIntitle" for="passwordEntry">Password</Label>
                <Input type="password" name="password" id="passwordEntry" placeholder="Valid Password" value={password} onChange={e => setPassword(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>
          <Button className="signUpButtonPage">Sign up</Button>
        </Form>
        </Container>
    )
}

export default Create