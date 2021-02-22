import React from 'react';
import { useSelector } from 'react-redux';

import './Component.scss';

const Component = () => {

    //state value here
    const persistState = useSelector((state) => state.persist);

    //variable value here
    let themeState = persistState.theme;

  return (
    <div className={`page-components ${themeState}`}>
      <h2 className="mrb-16 title-page" >Components</h2>
      <div className="content-box">
        <div className="label-box">
          <h4 className="label-title">Button</h4>
        </div>
        <div className="menu-wrap">
          <p className="menu-title">Filled</p>
          <button>Click me!</button>
        </div>
        <div className="menu-wrap">
          <p className="menu-title">Ghost</p>
          <button>Push me!</button>
        </div>
      </div>
    </div>
  );
}

export default Component;
