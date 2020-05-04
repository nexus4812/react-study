import {combineReducers} from "redux";
import { reducer as form } from 'redux-form';
import event from './events.js'

export default combineReducers({ event, form })