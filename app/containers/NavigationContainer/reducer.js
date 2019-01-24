/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
} from './constants';

const initialState = fromJS({
  topics: [],
  isDrawerOpen: false,
});

const navigationContainerReducer = (state = initialState, { payload, type, topics, topic }) => {
  switch (type) {
    case '@@route/LOCATION_CHANGE':
      return state.set('routerLocation', payload.topics);
    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', topics);
    case SELECT_TOPIC:
      return state.set('selectedTopic', topic).set('isDrawerOpen', false);
    default:
      return state;
  }
};

export default navigationContainerReducer;
