/**
*
* LinkList
*
*/

import React from 'react';

import Link from '../Link';
import styles from './styles.css';

const LinkList = ({ links, topicName }) => (
  <div className={styles.linkList}>
    <h1>{topicName}</h1>
    {links.map(l => <Link key={l.id} link={l} />)}
  </div>
);

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      voteCount: React.PropTypes.number.isRequired,
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired,
    })
  ),
  topicName: React.PropTypes.string.isRequired,
};

export default LinkList;
