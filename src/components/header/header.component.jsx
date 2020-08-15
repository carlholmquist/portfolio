import React from 'react';

import USER from '../../assets/data/userdata';

import './header.styles.scss';

const Header = ( {scroll }) => {

    const { firstName, lastName } = USER;

    return (
    <div className='header'>
        <div className='header-title'>
            <div className='title-element'>
                <button className="test1" activeClass='active' to="test1" onClick={() => scroll('home')} >
                <h3>{firstName} {lastName}</h3>
                </button>
            </div>
        </div>
        <div className='header-navbar'>
            <ul>
                <li><button className="test1" to="test1" onClick={() => scroll('contact')} >Contact</button></li>
                <li><button className="test1" to="test1" onClick={() => scroll('about')} >About</button></li>
                <li><button className="test1" to="test1" onClick={() => scroll('projects')} >pRojects</button></li>
                <li><button className="test1" to="test1" onClick={() => scroll('other')} >oLd</button></li>
            </ul>
        </div>
        <div className='header-contact'>
            <button> CONTACT ME </button>
        </div>
    </div>
    )
}

export default Header;