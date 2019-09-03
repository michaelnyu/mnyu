import React from 'react';
import NavbarComponent from '~/src/components/navbar';
import { Heading, FONT_COLORS } from '~/src/shared/typography';

export const leftNavbar = <>house</>;

export const rightNavbar = <Heading color={FONT_COLORS.GRAY}>about</Heading>;

const Navbar = () => {
  return <NavbarComponent left={leftNavbar} right={rightNavbar} />;
};

export default Navbar;
