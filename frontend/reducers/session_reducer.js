import {merge} from 'lodash';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/sessiomn_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {currentUser});
    default:
      return state;
  }
};

export default SessionReducer;
