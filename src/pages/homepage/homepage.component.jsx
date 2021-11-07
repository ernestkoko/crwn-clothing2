import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

/**
 * The app's homepage
 * 
 * It is a functional component because we do not need any life cycle method
 */


const HomePage=()=>(
   
<div className='homepage'>
    <Directory/>
</div>
)

export default HomePage;