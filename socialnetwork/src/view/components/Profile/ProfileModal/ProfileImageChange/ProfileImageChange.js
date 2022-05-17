import React from 'react';
import { Button, Row } from 'react-materialize';
import { InputProfileImage } from '../Input/InputProfileImage';
import style from './ProfileImageChange.module.css';

const ProfileImageChange = ({ uploadImage, setImage, avatar, imagePreview }) => {
    return (
        <div onKeyUp={event => event.keyCode === 13 && uploadImage()}>
            <p style={{ marginBottom: '5px', color: 'gray' }}>UPDATE PROFILE IMAGE</p>
            <hr></hr>
            <Row>
                <img src={avatar} className={style.image} alt="avatar"/>
                <InputProfileImage setImage={setImage} imagePreview={imagePreview} />
            </Row>
            <Row>
                <Button onClick={uploadImage}><i className='fa fa-send'></i></Button>
            </Row>
        </div>
    )
}

export { ProfileImageChange };