import React from 'react';

import ProjectItem from '../../components/projectitem/projectitem.component';

import { PROJECTS } from '../../assets/data/projectdata';

import './project.styles.scss';

const ProjectPage = () => {

    return (
        <div className='projects-overview-container'>
        <div className='projects-image-background'></div>
            <div className='projects-header'>
                    <span>1: one</span>
                    <span>2: two</span>
                    <span>3: three</span>
                    <span>4: four</span>
                    <span>5: five</span>
                    <span>6: six</span>
            </div>
            <div className='projects-overview'>
                <ProjectItem project={PROJECTS[0]}/>
            </div>
        </div>
    )
}

export default ProjectPage;