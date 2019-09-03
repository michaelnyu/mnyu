import React from 'react';
import NavbarComponent from '~/src/components/navbar';

export const leftNavbar = <>house</>;

export const rightNavbar = (
  <>
    <p>about</p>
  </>
);

const Navbar = () => {
  return <NavbarComponent left={leftNavbar} right={rightNavbar} />;
};

export default Navbar;
