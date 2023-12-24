import React from 'react';
import '../css/MenuPage.css';
import { useNavigate } from 'react-router-dom';

function CardMenuNav({ title, img, link }) {
  const navigate = useNavigate();
  return (
    <div className='card-menu-nav-block' onClick={() => navigate(link)}>
        <img src={img} className='card-menu-img'/>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='card-menu-nav-block-title'>{ title }</div>
        </div>
    </div>
  )
}

export default CardMenuNav