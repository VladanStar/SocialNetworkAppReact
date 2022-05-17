import React from 'react';
import {Navbar, NavItem, Dropdown } from 'react-materialize';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import { storageService } from '../../../services/storageService';

const Header =()=>{

  const logOut =()=> {
    storageService.remove('token')
  }

    return(
      <Navbar
        className={style.header}
        alignLinks="right"
        brand={<span className={`brand-logo ${style.title}`}>Social Network</span>}
        centerChildren
        id="mobile-nav"
        menuIcon={<><div className={style.menu}></div><div className={style.menu}></div><div className={style.menu}></div></>}
        options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
        }}
      >
        <Link to='/feed'><NavItem>
          Feed
        </NavItem></Link>
        <Link to='/people'><NavItem>
          People
        </NavItem></Link>
        <Link to='/profile'><NavItem>
          Profile
        </NavItem></Link>
        <Dropdown
          id="Dropdown_6"
          options={{
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250
          }}
          trigger={<a href="#!"><i className="fa fa-gear"></i></a>}
        >
        <Link to='/'><span onClick={logOut}>
        <i className='fa fa-sign-out'><span className={style.font}> log out</span></i>
        </span></Link>
      </Dropdown>
</Navbar>
    )
}

export default Header;