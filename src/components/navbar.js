import React from 'react';

const styles = {
  side: {
    display: 'flex',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const NavBar = props => (
  <div css={styles.navbar}>
    <div css={styles.side}>{props.left}</div>
    <div css={styles.side}>{props.right}</div>
  </div>
);

export default NavBar;
