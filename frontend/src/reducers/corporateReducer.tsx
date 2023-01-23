import { ActionType } from '../actions/types';
import { CorporateActions } from './indexTypes';

export interface CorporatePaymentsType {
  data: [];
  loading: boolean;
  error: string;
  // PersonalPayments: [];
};

const initialState: CorporatePaymentsType = {
  data: [],
  loading: true,
  error: ''
};

const corporateReducer = (
 
  state = initialState,
  action: CorporateActions,
  ) => {
  //console.log('action ', state)
  //console.log('corp reducer action ', action)
        let payload;  
        if(action.payload) {
          payload = action.payload;
        }
        switch (action.type) {
          case ActionType.GET_CORPORATE_ACCOUNTS:
          return {
            ...state,
            data: payload,
            loading: false,
            error: null
          };
          case ActionType.CORPORATE_ACCOUNTS_ERROR:
          return {
            ...state,
            data: payload,
            loading: false,
            error: null
          };
          case ActionType.GET_CORPORATE_BALANCES:
          return {
            ...state,
            data: payload,
            loading: false,
            error: null
          };
          case ActionType.CORPORATE_BALANCES_ERROR:
          return {
            ...state,
            // error: payload,
          };
          case ActionType.GET_CORPORATE_TRANSACTIONS:
          return {
            ...state,
            data: payload,
            loading: false,
            error: null
          };
          case ActionType.CORPORATE_TRANSACTIONS_ERROR:
          return {
            ...state,
            // error: payload,
          };
         
          default:
            return state
        }
    }

  export default corporateReducer;

