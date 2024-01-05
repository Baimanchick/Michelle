import React from 'react';
import '../css/MenuPage.css';
import { useNavigate } from 'react-router-dom';

function CardMenuNav({ title, img, link, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    
    if (onClick) {
      onClick();
    }

    navigate(link);
  };

  return (
    <div className='card-menu-nav-block' onClick={handleClick}>
      <img src={img} className='card-menu-img' alt={title} />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='card-menu-nav-block-title'>{ title }</div>
      </div>
    </div>
  );
}

export default CardMenuNav;
