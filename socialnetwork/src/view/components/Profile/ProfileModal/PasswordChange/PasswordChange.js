import React from 'react';
import { Button, Row } from 'react-materialize';
import { InputPassword } from '../Input/InputPassword';

const PasswordChange = ({ user, saveNewPassword, insertData }) => {
    return (
        <div onKeyUp={event => event.keyCode === 13 && saveNewPassword()}>
            <p style={{ marginBottom: '5px', color: 'gray' }}>CHANGE PASSWORD</p>
            <hr></hr>
            <Row>
                <InputPassword insertData={insertData} email={user.email} />
            </Row>
            <Row>
                <Button onClick={saveNewPassword}><i className='fa fa-send'></i></Button>
            </Row>
        </div>
    )
}

export { PasswordChange };