import React from 'react';

import './about.styles.scss';

const AboutPage = () => (
    <div className='about'>
        <div className='about-image-background'></div>
        <div className='description'>
            <div className='description-title'>
                <h1> Who am I? </h1>
            </div>
            <div className='about-text'>
                <span> Born and raised in Sweden. Based in Austin, Tx.</span>
            </div>
        </div>
    </div>
)

export default AboutPage;