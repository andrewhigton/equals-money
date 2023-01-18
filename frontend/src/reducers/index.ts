import { combineReducers } from 'redux';
import personalReducer from './personalReducer';
import accountsScreenReducer from './accountsScreenReducer';
import corporateReducer from './corporateReducer';
// import thunk from 'redux-thunk';

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  whitelist: ['personalPaymentsReducer', 'accountsScreenReducer', 'corporateAccountsReducer']
}

const rootReducer = combineReducers({
personalAccounts: personalReducer,
corporateAccounts: corporateReducer,
// personalBalances: personalBalancesReducer,
// corporateBalances: corporateBalancesReducer,
// personalAccounts: personalAccountsReducer,
// corporateAccounts: corporateAccountsReducer,
// personalBalances: personalBalancesReducer,
// corporateBalances: corporateBalancesReducer,
accountsScreen: accountsScreenReducer,

});

export default rootReducer;