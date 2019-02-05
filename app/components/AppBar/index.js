/**
*
* AppBar
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles.css';
import { Link } from 'react-router';

const AppBar = ({ toggleDrawer, email }) => (
  <div className={styles.appBar}>
    <div className={styles.iconButton} onClick={toggleDrawer}>
      <FontAwesome className={styles.icon} name="bars" />
    </div>
    <div className={styles.heading}>Coder Daily</div>
    <div className={styles.linkContiner}>
      {email || <Link to="/login">Login</Link>}
    </div>
  </div>
);

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
};

export default AppBar;
