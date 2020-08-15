import React from 'react';

import USER from '../../assets/data/userdata';

import './home.styles.scss';

const HomePage = () => (
    <div className='home'>
        <div className='image-background'></div>
        <div className='description'>
            <div className='grid-item'></div>   
            <div className='grid-item mid-line'><h1>Hi, I'm Carl Holmquist</h1> <div className='linethrough'></div></div>   
            <div className='grid-item'><span>Engineer,<br/>Developer, <br/>Designer</span></div>   
            <div className='grid-item'></div>   
        </div>
    </div>
)

export default HomePage;