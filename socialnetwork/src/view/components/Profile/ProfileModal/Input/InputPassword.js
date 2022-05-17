import React from 'react';
import { TextInput, Col } from 'react-materialize';

const InputPassword = ({ insertData, email }) => {

    const changeData = (event) => {
        let name = event.target.name;
        let data = event.target.value;
        insertData(data, name)
    }

    return (
        <Col>
            <TextInput
                value={email}
                id='TextInput-11'
                label='Email'
                name="email"
                disabled

            />
            <TextInput
                onChange={changeData}
                id='TextInput-12'
                label='Password'
                name="password"
            />
            <TextInput
                onChange={changeData}
                id='TextInput-13'
                label='New Password'
                name="newPassword"
            />
            <TextInput
                id='TextInput-14'
                style={{ visibility: 'hidden' }}
            />
        </Col>
    )
}

export { InputPassword }