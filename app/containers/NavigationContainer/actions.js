/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_FAILED,
  REQUEST_TOPICS_SUCCEEDED,
} from './constants';

export const requestTopics = () => ({
  type: REQUEST_TOPICS,
});

export const requestTopicsFailed = (message) => ({
  type: REQUEST_TOPICS_FAILED,
  message,
});

export const requestTopicsSucceeded = (topics) => ({
  type: REQUEST_TOPICS_SUCCEEDED,
  topics,
});
