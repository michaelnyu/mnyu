import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    textDecoration: 'none',
  },
};

const NavBar = ({ children, ...otherProps }) => (
  <Link css={styles.link} {...otherProps}>
    {children}
  </Link>
);

export default NavBar;
