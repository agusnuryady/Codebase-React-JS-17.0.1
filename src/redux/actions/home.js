export const SAMPLE_ACTION = "SAMPLE_ACTION";

export const sampleAction = () => (dispatch, getState) => {
  const { home } = getState();
  dispatch({ type: SAMPLE_ACTION, payload: { data: home.count + 1 } });
};
