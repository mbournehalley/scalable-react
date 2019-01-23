/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';
import styles from './styles.css';
import LinkList from '../../components/LinkList';
import { requestLinks } from './actions';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    routeTopicName: React.PropTypes.string.isRequired,
    requestLinks: React.PropTypes,
  }

  componentWillMount() {
    this.props.requestLinks(this.props.routeTopicName);
  }

  componentWillReceiveProps({ routeTopicName }) {
    if (routeTopicName !== this.props.routeTopicName) {
      this.props.requestLinks(routeTopicName);
    }
  }

  render() {
    return (
      <LinkList {...this.props} className={styles.linkListContainer} />
    );
  }
}

const mapStateToProps = selectLinkListContainer();

const mapDispatchToProps = (dispatch) => ({
  requestLinks: (topicName) => dispatch(requestLinks(topicName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
