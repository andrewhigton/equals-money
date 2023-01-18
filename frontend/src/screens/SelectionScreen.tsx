import React from 'react'
// @ts-ignore
//import retailAccount from '../account';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../hooks'
// import { fetchCorporateBalances } from '../actions/corporatePaymentsActions';
import { fetchCorporateAccounts, fetchCorporateBalances } from '../actions/corporateAccountsActions';
import { clearAccountsScreen } from '../actions/setAccountsScreenActions';
import { fetchPersonalBalances, fetchPersonalAccounts } from '../actions/personalAccountsActions';
import { Link } from 'react-router-dom';



interface AccountsScreenProps {
  // fetchPersonalPayments: () => void;
  //personalPaymentsList: [];
  // personalPayments: PersonalPaymentsType;
  // personalPayments?: PersonalPaymentsType;
  //fetchCorporateBalances: () => void;
}

 type accountSelectionType = {
	screen: string
}

const SelectionScreen: React.FC = () => {
	

const dispatch = useAppDispatch();
const personalPaymentsList = useAppSelector((state) => state?.personalAccounts)
const accountScreen: any = useAppSelector((state) => state?.accountsScreen['screen'])

const fetchAccounts = (button: string) => {
	if (button === 'business' ) {
		// console.log('corp accounts called', button)	
	 	dispatch(fetchCorporateAccounts()) 
} else {
		dispatch(fetchPersonalAccounts())
		}
}


const fetchBalances = (button: string) => {
	if (button === 'business' ) {
		//console.log('corp balances called', button)	
	 	dispatch(fetchCorporateBalances()) 
} else {
	//console.log('personal balances called', button)	

		dispatch(fetchPersonalBalances())
		}
}

// const fetchTransactions = (button: string) => {
// 	console.log('fetch called', button)	
// 	if (button === 'business' ) {
// 	 	dispatch(fetchCorporateTransactions()) 
// } else {
// 		dispatch(fetchPersonalTransactions())
// 		}
// }


	return (
		<div>
			<Container>

			<h1 className='homepage-head'>{`${accountScreen} payments`}</h1>
			{/*if transactions*/}
			<Row>
				<Col sm={12} md={6} lg={4}>
				
				<Card className="card-main" >
						{/*switch the colours here*/}
						<div className="card-business">
						<Card.Header className="card-header" as="h5">Accounts</Card.Header>
							<Card.Body>	
							
							<div className="logo-div">
							<i className="equals-sign"></i>
								<div className="card-logo">
								<Card.Subtitle className="mb-2 text-muted equals-header">EQUALS</Card.Subtitle>
								<Card.Text className="mb-2 text-muted equals-subheader">Money</Card.Text>
								</div>
							</div>

							
							<Link to="/accounts">
							<Button 
							variant="outline-warning" 
							size="lg" 
							className="business-page-button"
							//pass a prop here?
							onClick={() => fetchAccounts(accountScreen)}
							>Account Details</Button>
							</Link>
						
						</Card.Body>	
					    </div>
				</Card>
				</Col>
				<Col sm={12} md={6} lg={4}>
				<Card className="card-main" >

						<div className="card-business">
						<Card.Header className="card-header" as="h5">Balances</Card.Header>
							<Card.Body>	
							
							<div className="logo-div">
							<i className="equals-sign"></i>
								<div className="card-logo">
								<Card.Subtitle className="mb-2 text-muted equals-header">EQUALS</Card.Subtitle>
								<Card.Text className="mb-2 text-muted equals-subheader">Money</Card.Text>
								</div>
							</div>

			
							<Link to="/balances">
							<Button 
							variant="outline-warning" 
							size="lg" 
							className="business-page-button"
							onClick={() => fetchBalances(accountScreen)}
							>Balance</Button>
							</Link>
						

						</Card.Body>	
					    </div>
				</Card>
				
				</Col>
				<Col sm={12} md={6} lg={4}>
				<Card className="card-main" >

						<div className="card-business">
						<Card.Header className="card-header" as="h5">Transactions</Card.Header>
							<Card.Body>	
							
							<div className="logo-div">
							<i className="equals-sign"></i>
								<div className="card-logo">
								<Card.Subtitle className="mb-2 text-muted equals-header">EQUALS</Card.Subtitle>
								<Card.Text className="mb-2 text-muted equals-subheader">Money</Card.Text>
								</div>
							</div>

			
							<Link to="/transactions">
							<Button 
							// variant="outline-warning" 
							size="lg" 
							className="business-page-button"
							// onClick={() => fetchTransactions(accountScreen.screen)}
							>Transactions</Button>
							</Link>
						
						</Card.Body>	
					    </div>
				</Card>
				</Col>				
			</Row>
				
			</Container>
		</div>
	)
	
}

export default SelectionScreen;

// 		//not reaching these
// 		if (button === 'accounts' && accountSelection === 'business' ) {
// 		console.log('account', accountSelection)
			
// 			dispatch(fetchCorporateAccounts()) 
// 	} else if (button === 'balances' && accountSelection === 'business') {
// 			// console.log('balances')
			
// 	// 		fetchPersonalAccounts() 
// 	} else if (button === 'transactions' && accountSelection === 'business') {
// 			console.log('transactions')
			
			
// 	} else if (button === 'accounts' && accountSelection === 'personal') {
// 			console.log('reached action personal accounts')
// 			dispatch(fetchPersonalAccounts())
// 	} else if (button === 'balances' && accountSelection === 'personal') {
			
// 			console.log('personal balances')
// 			dispatch(fetchPersonalBalances()) 
// 	} else if (button === 'transactions' && accountSelection === 'personal') {
			
// 			console.log('personal transactions')

// 		} else if (button === 'accounts' && accountSelection === 'joint') {
// 			console.log('joint accounts')
// 			//dispatch(fetchPersonalBalances()) 
// 	} else if (button === 'balances' && accountSelection === 'joint') {
			
// 			console.log('joint balances')
	
// 	} else if (button === 'transactions' && accountSelection === 'joint') {
			
// 			console.log('joint transactions')
// 		}

// }
