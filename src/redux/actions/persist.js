import { switchLanguage } from '../../i18n';

export const CHOOSE_LANGUAGE = 'CHOOSE_LANGUAGE';
export const CHANGE_THEME = 'CHANGE_THEME';

export const chooseLanguage = (data) => (dispatch) => {
  switchLanguage(data);
  dispatch({ type: CHOOSE_LANGUAGE, payload: { data } });
};

export const changeTheme = (data) => (dispatch) => {
  dispatch({ type: CHANGE_THEME, payload: { data } });
};
