/* eslint-disable import/no-anonymous-default-export */
import { CHANGE_THEME, CHOOSE_LANGUAGE } from '../actions';

const initialState = {
  language: '',
  theme: 'light',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSE_LANGUAGE:
      return { ...state, language: payload.data };
    case CHANGE_THEME:
      return { ...state, theme: payload.data };
    default:
      return state;
  }
};
