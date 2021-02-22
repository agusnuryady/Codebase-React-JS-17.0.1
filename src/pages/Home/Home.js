//package import here
import React, { useCallback, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

//local import here
import './Home.scss';
import '../../sass/_styles.scss';
import I18n from '../../i18n';
import { AppsIcon,  DashboardIcon, DoubleChevron, NotificationIcon, PersonIcon, SettingsIcon } from '../../assets/svgs';

//page import here
import Dashboard from './components/Dashboard';
import Component from './components/Component';
import Setting from './components/Setting';

const Home = () => {
  //package value here

  //state value here
  const persistState = useSelector((state) => state.persist);
  const [isHide, setIsHide] = useState(false);

  //variable value here
  let themeState = persistState.theme;

  useEffect(() => {
    //function here
    setIsHide(false)
  }, []);

  //place your function in here
  const _toggleMenu = useCallback(() => {
    if (isHide) {
      setIsHide(false)
    } else {
      setIsHide(true)
    }
  }, [isHide]);

  //place your extension component here

  return (
    <Router>
      <div className={`page-home ${themeState}`}>
        <header className="container-header">
          <NavLink to="/" className="title-header">
            <h1 className="title-header" >MICRO</h1>
          </NavLink>
          <div className="fxd-row">
          <div className="button-header" >
            <NotificationIcon className="header-icon" />
          </div>
          <div className="button-header mrl-12">
            <PersonIcon className="header-icon" />
            <p className="username mrl-12" >Rahmat Agus Nuryady</p>
          </div>
          </div>
        </header>
        <div className="container-page">
          <div className={isHide ? "sidebar-hide" : "sidebar"} >
            <div className="wrap-toggle">
              <div className={isHide ? "sidebar-toggling-hide" : "sidebar-toggling"} onClick={_toggleMenu} >
                <DoubleChevron className="sidebar-arrow" />
              </div>
              <p className="text-hide" onClick={_toggleMenu}>{I18n.t('hideMenu')}</p> 
            </div>
            <NavLink exact={true} to="/" className="sidebar-menu" activeClassName="sidebar-menu-active" >
              <div className="menu-wrap-icon">
                <DashboardIcon className="menu-icon" />
              </div>
              <p className="menu-title">{I18n.t('dashboard')}</p>
            </NavLink>
            <NavLink to="/Components" className="sidebar-menu" activeClassName="sidebar-menu-active">
              <div className="menu-wrap-icon">
                <AppsIcon className="menu-icon" />
              </div>
              <p className="menu-title">{I18n.t('components')}</p>
            </NavLink>
            <NavLink to="/Setting" className="sidebar-menu" activeClassName="sidebar-menu-active">
              <div className="menu-wrap-icon">
                <SettingsIcon className="menu-icon" />
              </div>
              <p className="menu-title">{I18n.t('setting')}</p>
            </NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/Components" component={Component} />
              <Route path="/Setting" component={Setting} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Home;
