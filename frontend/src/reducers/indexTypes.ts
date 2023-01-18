import { ActionType } from '../actions/types';

interface GetPersonalPayments {
  type: ActionType.GET_PERSONAL_ACCOUNTS;
  payload: {};

}

interface PersonalPaymentsError {
  type: ActionType.PERSONAL_ACCOUNTS_ERROR;
  payload: {};
}

 interface GetPersonalAccounts {
  type: ActionType.GET_PERSONAL_BALANCES;
  payload: {};
}

interface PersonalBalancesError {
  type: ActionType.PERSONAL_BALANCES_ERROR;
  payload: {};
}




export type PersonalPaymentsActions =
  | GetPersonalPayments
  | PersonalPaymentsError
  | GetPersonalAccounts
  | PersonalBalancesError;



interface setAccountsScreen {
  type: ActionType.SET_ACCOUNTS_SCREEN;
  payload: string;
}

interface setAccountsScreenError {
  type: ActionType.SET_ACCOUNTS_SCREEN_ERROR;
  payload: string;
}

interface clearAccountsScreen {
  type: ActionType.CLEAR_ACCOUNTS_SCREEN;
  payload: string;

}

export type AccountsScreenActions =
  | setAccountsScreen
  | setAccountsScreenError
  | clearAccountsScreen;



  interface GetCorporateAccounts {
  type: ActionType.GET_CORPORATE_ACCOUNTS;
  payload: {};

}

interface CorporateAccountsError {
  type: ActionType.CORPORATE_ACCOUNTS_ERROR;
  payload: {};
}

interface GetCorporateBalances {
  type: ActionType.GET_CORPORATE_BALANCES;
  payload: {};

}

interface CorporateBalancesError {
  type: ActionType.CORPORATE_BALANCES_ERROR;
  payload: {};
}


export type CorporateActions =
  | GetCorporateAccounts
  | CorporateAccountsError
  | GetCorporateBalances
  | CorporateBalancesError
  ;



