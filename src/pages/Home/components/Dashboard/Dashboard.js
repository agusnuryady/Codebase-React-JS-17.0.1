import React from 'react';
import { useSelector } from 'react-redux';

import './Dashboard.scss';
import '../../../../sass/_styles.scss';

const Dashboard = () => {
  //package value here

  //state value here
  const persistState = useSelector((state) => state.persist);

  //variable value here
  let themeState = persistState.theme;

  return (
    <div className={`page-dashboard ${themeState}`}>
      <h2 className="mrb-16 title-page" >Dashboard Page</h2>
      <div className="wrap-card">
        <p className="title-card">Users {process.env.REACT_APP_TEST_ENV}</p>
        <div className="box-card">
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
