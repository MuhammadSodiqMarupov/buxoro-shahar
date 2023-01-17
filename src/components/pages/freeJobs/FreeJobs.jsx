import React from 'react';
import DynamicSideBar from '../../SideBar/DynamicSideBar';

const FreeJobs = (props) => {
    return (
        <div className='free_jobs'>
            <DynamicSideBar object={props.data}/>
            <div className="free_jobs_container">
                
            </div>
        </div>
    );
}

export default FreeJobs;