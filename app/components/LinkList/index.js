/**
*
* LinkList
*
*/

import React from 'react';

import Link from '../Link';
import styles from './styles.css';

const LinkList = ({ links }) => (
  <div className={styles.linkList}>
    {links.map(l => <Link key={l.id} link={l} />)}
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
