/**
*
* LinkList
*
*/

import React from 'react';


import styles from './styles.css';

const LinkList = ({ links }) => (
  <div className={styles.linkList}>
    {links.map(l => <div key={l.id}>{l.url} - ({l.description})</div>)}
  </div>
);

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired,
    })
  ),
};

export default LinkList;
