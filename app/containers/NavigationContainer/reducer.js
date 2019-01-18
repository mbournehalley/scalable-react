/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED, SELECT_TOPIC,
} from './constants';

const initialState = fromJS({
  topics: [],
});

const navigationContainerReducer = (state = initialState, { type, topics, topic }) => {
  switch (type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', topics);
    case SELECT_TOPIC:
      return state.set('selectedTopic', topic);
    default:
      return state;
  }
};

export default navigationContainerReducer;
