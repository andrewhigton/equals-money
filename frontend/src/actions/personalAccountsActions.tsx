import axios from 'axios';
import { ActionType } from './types';
import { PersonalPaymentsActions } from '../reducers/indexTypes';
import { Dispatch } from 'redux';

// Get all personal accounts

export const fetchPersonalAccounts = () => async (dispatch: Dispatch<PersonalPaymentsActions>) => {
 
  try {
    const res = await axios.get('http://localhost:5000/api/personalaccounts');
  
    dispatch({
      type: ActionType.GET_PERSONAL_BALANCES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ActionType.PERSONAL_BALANCES_ERROR,
      payload: {},
    });
    }
  };


export const fetchPersonalBalances = () => async (dispatch: Dispatch<PersonalPaymentsActions>) => {
  
  try {
    const res = await axios.get('http://localhost:5000/api/personalbalances');
  
    dispatch({
      type: ActionType.GET_PERSONAL_ACCOUNTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ActionType.PERSONAL_ACCOUNTS_ERROR,
      payload: {},
    });
    }
  };

 export const fetchPersonalTransactions = () => async (dispatch: Dispatch<PersonalPaymentsActions>) => {
  
  try {
    const res = await axios.get('http://localhost:5000/api/personaltransactions');
    //console.log('personal balances res ', res)
    dispatch({
      type: ActionType.GET_PERSONAL_TRANSACTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ActionType.PERSONAL_TRANSACTIONS_ERROR,
      payload: {},
    });
    }
  };