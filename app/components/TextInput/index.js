/**
*
* TextInput
*
*/

import React from 'react';

import classNames from 'classnames';
import styles from './styles.css';

class TextInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { errorText } = this.props;
    const fieldError = errorText ? <div className={styles.errorMessage}>{errorText}</div> : null;

    return (
      <div className={styles.textInput}>
        <input
          className={classNames(styles.input, this.props.className, { [styles.inputError]: this.state.errorText })}
          placeholder={this.props.placeholder}
          ref={(f) => { this.field = f; }}
          type="text"
        />
        {fieldError}
      </div>
    );
  }
}

TextInput.propTypes = {
  className: React.PropTypes.string,
  errorText: React.PropTypes.string,
  placeholder: React.PropTypes.string,
};

export default TextInput;
