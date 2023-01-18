import { ActionType } from '../actions/types';
import { CorporateActions } from './indexTypes';

export interface CorporatePaymentsType {
  payments: [];
  loading: boolean;
  error: string;
  // PersonalPayments: [];
};

const initialState: CorporatePaymentsType = {
  payments: [],
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
            payments: payload,
            loading: false,
            error: null
          };
          case ActionType.CORPORATE_ACCOUNTS_ERROR:
          return {
            ...state,
            payments: payload,
            loading: false,
            error: null
          };
          case ActionType.GET_CORPORATE_BALANCES:
          return {
            ...state,
            payments: payload,
            loading: false,
            error: null
          };
          case ActionType.CORPORATE_BALANCES_ERROR:
          return {
            ...state,
            // error: payload,
          };
          //this needed?
          // case ActionType.CLEAR_FILM:
          // return {
          //   ...state,
          //   film: null,
          //   films: [],
          //   filmLoading: false
          // };
          default:
            return state
        }
    }

  export default corporateReducer;

