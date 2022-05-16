import React from 'react';
import { TextInput, Button, Col } from 'react-materialize';
import style from '../UserForm.module.css';

const Register =({ insertData, submitData })=>{
    return(
        <>
            <Col l={6}>
                <TextInput
                onChange={insertData}
                id='TextInput-3'
                label='First Name'
                name="firstName"
                />
            </Col>
            <Col l={6}>
                <TextInput
                onChange={insertData}
                id='TextInput-4'
                label='Last Name'
                name="lastName"
                />
            </Col>   
            <Col l={6}> 
                <TextInput
                onChange={insertData}
                id='TextInput-5'
                email
                label='Email'
                name="email"
                validate
                />
            </Col>
            <Col l={6}>
                <TextInput
                onChange={insertData}
                id='TextInput-6'
                label='Password'
                name="password"
                password
                />
            </Col>
            <Col l={12}>
                <Button
                className={style.font}
                onClick={submitData}
                node="button"
                type="submit"
                waves="light"
                >
                Register
                </Button>
            </Col>
        </>
    )
}

export {Register};