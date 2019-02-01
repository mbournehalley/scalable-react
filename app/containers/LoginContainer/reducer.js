/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN,
} from './constants';

const initialState = fromJS({});

function loginContainerReducer(state = initialState, { email, type }) {
  switch (type) {
    case LOGIN:
      return state.set('email', email);
    default:
      return state;
  }
}

export default loginContainerReducer;
