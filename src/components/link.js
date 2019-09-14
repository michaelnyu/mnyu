import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const styles = {
  link: {
    textDecoration: 'none',
  },
};

const Link = ({ children, ...otherProps }) => (
  <ReactRouterLink css={styles.link} {...otherProps}>
    {children}
  </ReactRouterLink>
);

export default Link;
