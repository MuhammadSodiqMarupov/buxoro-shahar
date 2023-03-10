import React from 'react';
import { useEffect } from 'react';
import headerAPI from '../../headerAPI';
import { useParams } from 'react-router-dom';
const DynamicPage = ({htmlElement}) => {
    return (
        <section className='default_page'>
        <div dangerouslySetInnerHTML={{__html: htmlElement}}>
        </div>
        </section>
    );
}

export default DynamicPage;