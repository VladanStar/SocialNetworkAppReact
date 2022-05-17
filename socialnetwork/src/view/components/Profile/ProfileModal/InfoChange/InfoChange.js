import React from 'react';
import { Button, Row } from 'react-materialize';
import { InputInfo } from '../Input/InputInfo';

const InfoChange = ({ submitData, insertData }) => {
    return (
        <div onKeyUp={event => event.keyCode === 13 && submitData()}>
            <p style={{ marginBottom: '5px', color: 'gray'  }}>UPDATE INFO</p>
            <hr></hr>
            <Row>
                <InputInfo insertData={insertData} />
            </Row>
            <Row>
                <Button onClick={submitData}><i className='fa fa-send'></i></Button>
            </Row>
        </div>
    )
}

export { InfoChange };