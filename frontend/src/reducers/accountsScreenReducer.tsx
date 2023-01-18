import { ActionType } from '../actions/types';
import { AccountsScreenActions } from './indexTypes';

export interface AccountsScreenType {
  screen: string;
  // loading: boolean;
  // error: string;
  // PersonalPayments: [];
};

const initialState: AccountsScreenType = {
  screen: '',
  
};

const accountsScreenReducer = (
 
  state = initialState,
  action: AccountsScreenActions,
  ) => {
  
  // console.log('action ', action.payload)
        let payload;  
        if(action.payload) {
          payload = action.payload;
        }
        switch (action.type) {
          case ActionType.SET_ACCOUNTS_SCREEN:
          return {
            
            screen: payload
          };
          case ActionType.SET_ACCOUNTS_SCREEN_ERROR:
          return {
            ...state,
            // error: payload,
          };
          //this needed?
          case ActionType.CLEAR_ACCOUNTS_SCREEN:
          return {
            screen: '',
          };
          default:
            return state
        }
    }

  export default accountsScreenReducer;