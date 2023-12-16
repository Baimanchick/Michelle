import React, { useEffect, useRef, useState } from 'react';
import '../css/MenuPage.css';
import { categories, menu } from './SliderMenu';
import closeBTN from '../images/Group 121.svg'

function FullscreenMenu({ onCloseMenu, onSelectCategory, selectedCategory }) {
  const menuRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const [ selectC, setSelectC ] = useState(categories[0])

  useEffect(() => {
    if (menuRef.current) {
      setTimeout(() => {
        menuRef.current.classList.add('active');
      }, 0);
    }
  }, []);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      onCloseMenu();
    }, 300);
  };

  return (
    <div ref={menuRef} className={`fullscreen-menu ${isClosing ? 'closing' : ''}`}>
      <div className='menu-block-f'>
        { categories?.map((category) => (
            <h3 className='category-name' onClick={() => {
              onSelectCategory(category)
              onCloseMenu()
            }}>{ category.name }</h3>
        )) }
      </div>
      <h1 className='main-menu'>ГЛАВНОЕ МЕНЮ</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <img src={closeBTN} onClick={handleCloseMenu} className='close-btn' />
      </div>
    </div>
  );
}

export default FullscreenMenu;