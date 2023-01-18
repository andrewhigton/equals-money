import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { fetchPersonalAccounts } from './actions/personalPaymentsActions';
// import { fetchCorporateBalances } from './actions/corporatePaymentsActions';

//import { PersonalPaymentsInitialStateType } from './reducers/index';
//import RootState from './reducers/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import AccountsScreen from './screens/AccountsScreen' 
import BalancesScreen from './screens/BalancesScreen';
import TransactionsScreen from './screens/TransactionsScreen'  
import SelectionScreen from './screens/SelectionScreen'  

//import axios from 'axios';

interface AppProps {
  fetchPersonalAccounts: () => void;
  // personalPayments: {};
}

// interface IRootState {
//   personalPayments: {};
// }


const App: React.FC<AppProps> = ({
  // state,
  // fetchPersonalAccounts,
  // personalPayments
  }) => {
 // console.log('CALLED')
  // useEffect(() => {
  //   fetchCorporateBalances()
  
  // }, [])
 
  return (
    <div className="App">
    <Router>
          <Header />
            <Routes>
              <Route path='/' element={<HomeScreen />} />          
              <Route path='/selection' element={<SelectionScreen />} />
              {/*<Route path='/personal;' element={<PersonalScreen />} />
              <Route path='/joint' element={<JointScreen />} />*/}
              <Route path='/accounts' element={<AccountsScreen />} />
              <Route path='/balances' element={<BalancesScreen />} />
              <Route path='/transactions' element={<TransactionsScreen />} />
            </Routes>
          <Footer />
    </Router>
    </div>
  );
}

// const mapStateToProps = (state: AppProps) => ({
//     personalPayments: state.personalPayments,
// })

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//      fetchPersonalAccounts: () => dispatch(fetchPersonalAccounts()),
 
//   }
// }

export default App;
//export default connect(null, mapDispatchToProps)(App)




// import HomeScreen from './screens/HomeScreen';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import BusinessScreen from './screens/BusinessScreen'
// import PersonalScreen from './screens/PersonalScreen'

// import './App.css';

// function App() {
//   return (
    
    
//     <BrowserRouter>
//     <Header />  
//         <main className='py-3'>
       
          
//           <Routes>
//             <Route path='/' element={<HomeScreen/>} exact/>
//             <Route path='/business' element={<BusinessScreen/>} exact/>
//             <Route path='/personal' element={<PersonalScreen/>} exact/>
//           </Routes>
          

//         </main>
//     <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
