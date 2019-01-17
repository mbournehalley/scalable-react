/**
*
* Navigation
*
*/

import React from 'react';


import styles from './styles.css';

const Navigation = ({ topics }) => (
  <div className={styles.navigation}>
    We have {topics.length}
  </div>
);

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
