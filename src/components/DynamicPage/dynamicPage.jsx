import React from 'react';
import { useEffect } from 'react';
import headerAPI from '../../headerAPI';
import { useParams } from 'react-router-dom';
const DynamicPage = ({htmlElement}) => {
    return (
        <div dangerouslySetInnerHTML={{__html: htmlElement}}>
        </div>
    );
}

export default DynamicPage;