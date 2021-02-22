import { combineReducers } from 'redux';

//please short from a to z if adding new reducer
import home from './home';
import persist from './persist';

export default combineReducers({
    home,
    persist,
})