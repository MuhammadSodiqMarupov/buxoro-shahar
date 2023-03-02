import React from 'react';
import NotFound from "../Images/error404.gif"
const NotFoundPage = () => {
    return (
        <div className='404'>
            <div className="container">
                <img src={NotFound} alt="" />
            </div>
        </div>
    );
}

export default NotFoundPage;