import React from 'react';
import style from './Footer.module.css';
import { Navbar } from 'react-materialize';

const Footer = () => {

    return (
        <Navbar
            className={`${style.footer} justify-content-center`}
            menuIcon={<div className={style.display}></div>}
            brand={<span className={style.name}>&copy; 2022, by vladan Cupric</span>}>
        </Navbar>
    )
}

export { Footer }