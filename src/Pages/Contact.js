import React, { useEffect, useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBInputGroup,
  MDBTextArea
} from 'mdb-react-ui-kit';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import '../Style/Contact.scss'

export default function Contact() {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    tel: '',
    message: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false)

  document.title = "Domingoec | Contact"

//   const onChange = (e: any) => {
//     setFormValue({ ...formValue, [e.target.name]: e.target.value });
//   };
  useEffect(() => {
    if(sentSuccess === true){
        setTimeout(() => {
            setSentSuccess(false)
            setFormValue({...formValue, [formValue.name]: ""})
            setFormValue({...formValue, [formValue.email]: ""})
            setFormValue({...formValue, [formValue.tel]: ""})
            setFormValue({...formValue, [formValue.message]: ""})
        }, 3000)
    }
  }, [sentSuccess])

  const submitBtn = (e) => {
    // e.preventDafault()

    let data = {
        name: formValue.name,
        email: formValue.email
    }
    fetch('https://email-server.herokuapp.com/api/form', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formValue.name,
                email: formValue.email,
                tel: formValue.tel,
                message: formValue.message
            })
        })
        setSentSuccess(true)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
  }

  return (
    <>
        <Container>
            <Row className='contactRow'>
                <Col className='col1'>
                    <div className="frame">
                        <div clasNames="text">
                            <span>❤</span>
                            <span></span>
                            <span>!</span>
                            <span>E</span>
                            <span>M</span>
                            <span></span>
                            <span>T</span>
                            <span>C</span>
                            <span>A</span>
                            <span>T</span>
                            <span>N</span>
                            <span>O</span>
                            <span>C</span>
                            <span></span>
                            <span>❤</span>
                            <span></span>
                            <span>!</span>
                            <span>E</span>
                            <span>M</span>
                            <span></span>
                            <span>T</span>
                            <span>C</span>
                            <span>A</span>
                            <span>T</span>
                            <span>N</span>
                            <span>O</span>
                            <span>C</span>
                            <span></span>
                            <span>❤</span>
                            <span></span>
                            <span>!</span>
                            <span>E</span>
                            <span>M</span>
                            <span></span>
                            <span>T</span>
                            <span>C</span>
                            <span>A</span>
                            <span>T</span>
                            <span>N</span>
                            <span>O</span>
                            <span>C</span>
                            

                        </div>
                    </div>
                </Col>
                <Col className='col2'>
                    <h1>Contact</h1>
                    {sentSuccess? <Alert variant='success'>Message sent successfully.</Alert>: <></>}
                    <MDBValidation className='row g-3'>
                        <MDBValidationItem className='' feedback='Please enter your name.' invalid>
                            <MDBInput
                            value={formValue.name}
                            name='name'
                            onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
                            id='validationCustom01'
                            required
                            label='Name'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem className='' feedback='Please enter your vaild email.' invalid>
                            <MDBInput
                            value={formValue.email}
                            type="email"
                            name='email'
                            onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
                            id='validationCustom02'
                            required
                            label='Email'
                            />
                        </MDBValidationItem>
                        {/* <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
                            <MDBInputGroup textBefore='@'>
                            <input
                                type='text'
                                className='form-control'
                                id='validationCustomUsername'
                                placeholder='Username'
                                required
                            />
                            </MDBInputGroup>
                        </MDBValidationItem> */}
                        <MDBValidationItem className='' >
                            <MDBInput
                            value={formValue.tel}
                            type="tel"
                            name='tel'
                            onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
                            id='validationCustom05'
                            label='Phone number ( optional )'
                            />
                        </MDBValidationItem>
                        <MDBValidationItem className='' feedback='Please write a message.' invalid>
                            <MDBTextArea
                            value={formValue.message}
                            name='message'
                            onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })}
                            id='validationCustom03'
                            required
                            label='Message'
                            />
                        </MDBValidationItem>
                        
                        <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
                            <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
                        </MDBValidationItem>
                        <div className='col-12'>
                            <MDBBtn onClick={() => submitBtn()} className='submitBtn' type='submit'>Submit form</MDBBtn>
                        </div>
                    </MDBValidation>
                </Col>
            </Row>
        </Container>
    </>
  );
}