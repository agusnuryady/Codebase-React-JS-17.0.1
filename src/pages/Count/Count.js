import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Count.scss';
import {LogoIcon} from '../../assets/svgs';
import { sampleAction } from '../../redux/actions';

const Count = () => {
  const dispatch = useDispatch();

  const homeState = useSelector(state => state.home)

  const _count = useCallback(() => {
    dispatch(sampleAction())
  },[dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <LogoIcon className="App-logo" />
        <p>
          Hit Ammount: 
          <br/>
          {homeState.count}
        </p>
        <button type="button" onClick={_count} >
          <h2 className="link">Count</h2>
        </button>
      </header>
    </div>
  );
}

export default Count;
