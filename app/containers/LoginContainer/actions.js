/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN,
} from './constants';

export const defaultAction = (email) => ({
  type: LOGIN,
  email,
});
