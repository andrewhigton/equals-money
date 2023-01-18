import axios from 'axios';
import { ActionType } from './types';
import { AccountsScreenActions } from '../reducers/indexTypes';
// import { } from '../reducers/indexTypes';
import { Dispatch } from 'redux';




export const setAccountsScreen = (account: string) => async (dispatch: Dispatch<AccountsScreenActions>) => {
  //console.log('called action', account)
   try {
        dispatch({
          type: ActionType.SET_ACCOUNTS_SCREEN,
          payload: account
        });
  } catch {
        dispatch({
          type: ActionType.SET_ACCOUNTS_SCREEN_ERROR,
          payload: '',
        });
      }
  };


 export const clearAccountsScreen = (account: string) => async (dispatch: Dispatch<AccountsScreenActions>) => {
  // console.log('called action')
   try {
        dispatch({
          type: ActionType.SET_ACCOUNTS_SCREEN,
          payload: ''
        });
  } catch {
        dispatch({
          type: ActionType.SET_ACCOUNTS_SCREEN_ERROR,
          payload: '',
        });
      }
  };