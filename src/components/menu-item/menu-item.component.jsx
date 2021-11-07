import React from 'react';
import './menu-item.styles.scss'
import { useParams, useNavigate, useLocation, useH } from 'react-router-dom'


function MenuItem  ({title, imageUrl, size, linkUrl, match}){
    let  history  = useParams();
    const navigate = useNavigate()
    const location = useLocation()
    
    return (
    <div  className={`${size} menu-item `} onClick={()=>{
        console.log(linkUrlgit)
        navigate(linkUrl)
        }}>

        <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>

            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>

)}
export default MenuItem;