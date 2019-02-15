/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import classNames from 'classnames';
class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    cancel: React.PropTypes.func.isRequired,
  }
  state = {};
  render() {
    return (
      <div className={styles.LinkForm}>
        <div className={styles.heading}>
          Login with your email
        </div>
        <input
          className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
          placeholder="URL"
          ref={(f) => { this.urlField = f; }}
          type="text"
        />
        <input
          className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
          placeholder="Description"
          ref={(f) => { this.descriptionField = f; }}
          type="text"
        />
        <div className={styles.actionContainer}>
          <div className={styles.button} onClick={this.props.cancel}>Cancel</div>
          <div className={styles.button} onClick={this.login}>Login</div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
