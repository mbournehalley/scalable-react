// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCCEEDED } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestTopicsFailed, requestTopicsSucceeded } from './actions';
import { push } from 'react-router-redux';
import selectNavigationContainer from './selectors';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

function* pushTopic({ topic }) {
  yield put(push(`/topics/${topic.name}`));
}

function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  if (!state.selectedTopic) {
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}
export function* selectDefaultTopicSaga() {
  yield* takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic);
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
  selectDefaultTopicSaga,
];
