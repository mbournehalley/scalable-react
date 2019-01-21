/**
*
* Drawer
*
*/

import React from 'react';


import styles from './styles.css';
import classNames from 'classnames';

const Drawer = ({ items, selectItem, itemsLabelAttr, itemKeyAttr, isDrawerOpen }) => (
  <div className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })}>
    {items.map(item => (
      <div
        className={styles.item}
        key={item[itemKeyAttr]}
        onClick={() => selectItem(item)}
      >
        {item[itemsLabelAttr]}
      </div>
    ))}
  </div>
);

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemsLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
};

export default Drawer;
