import { ActionType } from '../actions/types';
import { PersonalPaymentsActions } from './indexTypes';

export interface PersonalPaymentsType {
  data: [];
  loading: boolean;
  error: string;
  // PersonalPayments: [];
};

const initialState: PersonalPaymentsType = {
  data: [],
  loading: true,
  error: ''
};

const personalReducer = (
 
  state = initialState,
  action: PersonalPaymentsActions,
  ) => {
  //console.log('perosnalAccountsReducer ', state)
  // console.log('action ', action.payload)
        let payload;  
        if(action.payload) {
          payload = action.payload;
        }
        switch (action.type) {
          case ActionType.GET_PERSONAL_ACCOUNTS:
          return {
            ...state,
            data: payload,
            loading: false,
            error: null
          };
        case ActionType.PERSONAL_ACCOUNTS_ERROR:
          return {
            ...state,
            error: payload,
          }; 
         case ActionType.GET_PERSONAL_BALANCES:
          return {
            ...state,
            data: payload,
            loading: false,
            error: null
          };
          case ActionType.PERSONAL_BALANCES_ERROR:
          return {
            ...state,
            error: payload,
          }; 
        case ActionType.GET_PERSONAL_TRANSACTIONS:
          return {
            ...state,
            data: payload,
            loading: false,
            error: null
          };
          case ActionType.PERSONAL_TRANSACTIONS_ERROR:
          return {
            ...state,
            error: payload,
          }; 
        
          default:
            return state
        }
    }

  export default personalReducer;

