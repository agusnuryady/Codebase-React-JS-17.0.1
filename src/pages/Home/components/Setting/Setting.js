import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Switch from 'react-switch';

import './Setting.scss';
import '../../../../sass/_styles.scss';
import '../../../../sass/_color.scss';
import I18n from '../../../../i18n';
import { changeTheme, chooseLanguage } from '../../../../redux/actions';
import { BrightnessIcon, DarknessIcon } from '../../../../assets/svgs';

const Setting = () => {
  //package value
  const dispatch = useDispatch();

  //state value here
  const persistState = useSelector((state) => state.persist);

  //variable value here
  let themeState = persistState.theme;
  let language = persistState.language;

  //place your function in here
  const _handleClick = useCallback(
    (value) => {
      dispatch(chooseLanguage(value));
    },
    [dispatch]
  );

  return (
    <div className={`page-setting ${themeState}`}>
      <h2 className="mrb-16 title-page" >{I18n.t('setting')}</h2>
      <div className="content-box">
        <div className="label-box">
          <h4 className="label-title">{I18n.t('general')}</h4>
        </div>
        <div className="menu-wrap">
          <p className="menu-title">{I18n.t('selectLanguage')}</p>
          <div className={`button-switch left menu-title ${language === 'id' && 'btn-active'}`} onClick={() => _handleClick('id')} >Indonesia</div>
          <div className={`button-switch right menu-title ${language === 'en' && 'btn-active'}`} onClick={() => _handleClick('en')} >English</div>
        </div>
        <div className="menu-wrap">
          <p className="menu-title">{I18n.t('darkMode')}</p>
          <Switch 
            onChange={() => {
              if (persistState.theme === 'light') {
              dispatch(changeTheme('dark'))
            } else {
              dispatch(changeTheme('light'))
            }
            }} 
            checked={persistState.theme === 'dark'} 
            checkedIcon={(
              <div className="icon-wrap">
                <BrightnessIcon className="switch-icon" />
              </div>
            )} 
            uncheckedIcon={(
              <div className="icon-wrap">
                <DarknessIcon className="switch-icon" />
              </div>
            )} 
          />
        </div>
      </div>
    </div>
  );
}

export default Setting;
