/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  topics: [],
});

const navigationContainerReducer = (state = initialState, { type, topics }) => {
  switch (type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', topics);
    default:
      return state;
  }
};

export default navigationContainerReducer;
