import React from 'react';
import MenuItem from './MenuItem';

const MenuItems = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menu) => {
        return <MenuItem key={menu.id} {...menu} />;
      })}
    </div>
  );
};

export default MenuItems;
