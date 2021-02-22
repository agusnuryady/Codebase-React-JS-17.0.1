/* eslint-disable import/no-anonymous-default-export */
import { SAMPLE_ACTION } from "../actions";

const initialState = {
  count: 5,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAMPLE_ACTION:
      return { ...state, count: payload.data };
    default:
      return state;
  }
};
