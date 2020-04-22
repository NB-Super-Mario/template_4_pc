import ActionTypes from '../constants';
import { Action } from 'redux';

export const removeTabPage = (key: string): Action => ({
  type: ActionTypes.REMOVE_TAB_PAGE,
  key
});
export const addTabPage = page => ({
  type: ActionTypes.ADD_TAB_PAGE,
  page
});

export const changeCurrentTabPage = (key: string) => ({
  type: ActionTypes.CHANGE_CURRENT_TAB_PAGE,
  key
});

export const removeAllTabPage = () => ({
  type: ActionTypes.REMOVE_ALL_TAB_PAGE
});
