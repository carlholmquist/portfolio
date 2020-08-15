import React from 'react';
import { Element} from 'react-scroll';

import HomePage from '../../pages/home/home.component';
import AboutPage from '../../pages/about/about.component';
import ProjectPage from  '../../pages/project/project.component';

import './pagecontainer-styles.scss';

class PageContainer extends React.Component {
    render(){
        return (
            <div className='page-component'>
            <Element className='page-container' id='scroll-container'>

                <Element name='home' className='element'>
                    <HomePage/>
                </Element>
                <Element name='about' className='element'>
                    <AboutPage/>
                </Element>
                <Element name='contact' className='element'>
                        <AboutPage/>
                </Element>
                <Element name='projects' className='element'>
                    <ProjectPage/>
                </Element>
                <Element name='other' className='element'>
                    <AboutPage/>
                </Element>
            </Element>
            </div>
        )
    }
}

export default PageContainer;