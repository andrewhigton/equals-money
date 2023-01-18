import { ActionType } from '../actions/types';
import { PersonalPaymentsActions } from './indexTypes';

export interface PersonalPaymentsType {
  payments: [];
  loading: boolean;
  error: string;
  // PersonalPayments: [];
};

const initialState: PersonalPaymentsType = {
  payments: [],
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
            payments: payload,
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
            payments: payload,
            loading: false,
            error: null
          };
          case ActionType.PERSONAL_BALANCES_ERROR:
          return {
            ...state,
            error: payload,
          }; 
          // case ActionType.GET_FILMS:
          // return {
          //   ...state,
          //   films: payload,
          //   filmLoading: false
          // };
          // case ActionType.UPDATE_FILM:
          // return {
          //   ...state,
          //   film: payload,
          //   filmLoading: false
          // };
          // case ActionType.PERSONAL_PAYMENTS_ERROR:
          // return {
          //   ...state,
          //   // error: payload,
          // };
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

  export default personalReducer;

