import React from 'react';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const NavBar = props => (
  <div css={styles.navbar}>
    <>{props.left}</>
    <>{props.right}</>
  </div>
);

export default NavBar;
