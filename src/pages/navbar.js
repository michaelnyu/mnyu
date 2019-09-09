import React from 'react';
import House from '~/assets/house.svg';
import NavbarComponent from '~/src/components/navbar';
import Link from '~/src/components/link';
import { Heading, FONT_COLORS } from '~/src/shared/typography';

export const leftNavbar = (
  <Link to="/">
    <House css={{ width: 60, height: 'auto' }} />
  </Link>
);

export const rightNavbar = (
  <div css={{ display: 'flex', alignItems: 'center' }}>
    <Link to="/about">
      <Heading css={{ display: 'inline' }} color={FONT_COLORS.GRAY}>
        about
      </Heading>
    </Link>
  </div>
);

const Navbar = () => {
  return <NavbarComponent left={leftNavbar} right={rightNavbar} />;
};

export default Navbar;
