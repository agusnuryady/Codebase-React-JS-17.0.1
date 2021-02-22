import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isBahasa } from '../i18n';
import { chooseLanguage } from '../redux/actions';

//import screen here
import Home from '../pages/Home';

const RouteApps =() => {
    const dispatch = useDispatch();

  const persistState = useSelector((state) => state.persist);

  useEffect(() => {
    if (persistState.language === '') {
      if (isBahasa()) {
        dispatch(chooseLanguage('id'));
      } else {
        dispatch(chooseLanguage('en'));
      }
    } else {
      dispatch(chooseLanguage(persistState.language));
    }
  }, [dispatch, persistState.language])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default RouteApps;