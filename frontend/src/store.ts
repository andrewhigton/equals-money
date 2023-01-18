import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};
const middleware = [thunk];

// const store = createStore(
const store = configureStore({
  reducer: rootReducer
  // initialState,
  // composeWithDevTools(applyMiddleware(...middleware))
  });


  // export const persistor = persistStore(store)

export default store;
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch



// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { personalReducer } from './reducers/personalReducer';

// const rootReducer = combineReducers({
//    personalPayments: personalReducer,
// })

// const initialState = {}

// const middleware = [thunk]

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// )
 
// export default store;