import axios from 'axios';
import { ActionType } from './types';
import { CorporateActions } from '../reducers/indexTypes';
import { Dispatch } from 'redux';

// Get all  corporate Accounts
export const fetchCorporateAccounts = () => async (dispatch: Dispatch<CorporateActions>) => {
  //console.log('called action')
  try {
    const res = await axios.get('http://localhost:5000/api/corporateaccounts');
    // console.log('res ', res)
    dispatch({
      type: ActionType.GET_CORPORATE_ACCOUNTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ActionType.CORPORATE_ACCOUNTS_ERROR,
      payload: {},
    });
    }  
  };

// Get all corporate balances
export const fetchCorporateBalances = () => async (dispatch: Dispatch<CorporateActions>) => {
  try {
    //this isn;t working why?
    const res = await axios.get('http://localhost:5000/api/corporatebalances');
    //console.log('corp balances action response ', res)
    dispatch({
      type: ActionType.GET_CORPORATE_BALANCES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ActionType.CORPORATE_BALANCES_ERROR,
      payload: {},
    });
    }  
  };

// Get film by ID
// export const getFilmById = (film_id: number) => async (dispatch: Dispatch<ActionFilms>) =>
// {
//   dispatch({
//     type: ActionType.CLEAR_FILM,
//     payload: null,
//    });
//   try {
//     const res = await axios.get(`/api/film/${film_id}`)

   
//     dispatch({
//       type: ActionType.GET_FILM,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: ActionType.FILM_ERROR,
//       payload: null
//     });
//   }
// };

// create film
// export const createFilm = ( formData: string, history ) => async dispatch => {

//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };
 
//     const res = await axios.post('/api/film/create-film', formData, config);    
//     dispatch({
//       type: ActionType.GET_FILM,
//       payload: res.data
//     });
//     history.push('/film/dashboard');
//   } catch (err) {

//     if (err) {
//       alert(err)
//     }

//     dispatch({
//       type: ActionType.FILM_ERROR,
//       payload: null
//     });
//   }
// };

// export const updateFilm = (formData) => async (dispatch: Dispatch<ActionFilms>) => {

//   dispatch({
//     type: ActionType.CLEAR_FILM,
//     payload: null,
//      });
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };

   
//     const res = await axios.put('/api/film/booking', formData, config);
//     dispatch({
//       type: ActionType.UPDATE_FILM,
//       payload: res.data
//       });
//     alert('Thanks for your booking');
//   } catch (err) {
   
//     if (err) {
//       alert(err)
//     }


//     dispatch({
//       type: ActionType.FILM_ERROR,
//       payload: null
 
//     });
//   };
// }

