import React from 'react';
import './homepage.styles.scss';
/**
 * The app's homepage
 * 
 * It is a functional component because we do not need any life cycle method
 */

const HomePage=()=>(
<div className='homepage'>
    <div className='directory-menu'>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>HATS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>KACKETS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>SNEAKERS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>WOMENS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>MENS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        
    </div>
</div>
)
export default HomePage;