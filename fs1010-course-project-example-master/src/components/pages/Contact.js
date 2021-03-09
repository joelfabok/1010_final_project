import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Button, Container, CardBody, Card, CardText } from 'reactstrap'



const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
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
        <Container>
            
            <Form className="formContact" onSubmit={formSubmit}>
            <Card className="titleContact">
                <CardBody>
                    <CardText className="">CONTACT US</CardText>
                </CardBody>
            </Card>
                <FormGroup className="formBox">
                    <Input className="formText" type="email" name="email" id="emailEntry" placeholder="Email"  required value={email} onChange={e => setEmail(e.target.value) }/>
                </FormGroup>
                <FormGroup className="formBox">
                    
                    <Input className="formText" type="phone" name="phone" id="phoneEntry" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                    
                </FormGroup>
                <FormGroup className="formBox">
                    <Input className="formText" type="name" name="name" id="nameEntry" placeholder="Full Name" required value={name} onChange={e => setName(e.target.value)}/>
                </FormGroup>

                <FormGroup className="formBox">
                    <Input className="formText" type="textarea" name="text" id="messageEntry" placeholder="Comments" required value={content} onChange={e => setContent(e.target.value)}/>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 4 }}>
                    <Button className="formSubmitButton" >Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
      )
    }

    export default Contact

    