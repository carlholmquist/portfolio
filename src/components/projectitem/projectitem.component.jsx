import React from 'react';

import './projectitem.styles.scss';

const ProjectItem = ({ title, description, imageUrl }) => (
    <div className='project-item'>
        <div className='project-description'>
            <div className='project-title'>
                <h1> {title}</h1>
            </div>
            <div className='project-subtitle'>
                <span>{description}</span>
            </div>
        </div>
        <div className='project-image-container'>
            <div className='project-image' style={{ background:URL({imageUrl})}}/>
        </div>

    </div>
)

export default ProjectItem;