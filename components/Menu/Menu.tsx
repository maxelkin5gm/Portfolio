import React from 'react';

import cl from './Menu.module.scss'

const Menu = () => {

    return (
        <nav className={cl.menu}>
            <a className={cl.menu__item} href="#home">Home</a>
            <a className={cl.menu__item} href="#about">About</a>
            <a className={cl.menu__item}  href="#works">My works</a>
            <a className={cl.menu__item}  href="#contacts">Contacts</a>
        </nav>
    );
};

export default Menu;