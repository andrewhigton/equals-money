import React from 'react'
// @ts-ignore
import { connect, useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchCorporateAccounts, fetchCorporateBalances, fetchCorporateTransactions } from '../actions/corporateAccountsActions';
import { clearAccountsScreen } from '../actions/setAccountsScreenActions';
import { fetchPersonalBalances, fetchPersonalAccounts, fetchPersonalTransactions } from '../actions/personalAccountsActions';
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
	 	dispatch(fetchCorporateAccounts()) 
} else {
		dispatch(fetchPersonalAccounts())
		}
}


const fetchBalances = (button: string) => {
	if (button === 'business' ) {
	 	dispatch(fetchCorporateBalances()) 
} else {
		dispatch(fetchPersonalBalances())
		}
}

const fetchTransactions = (button: string) => {
	console.log('fetch called', button)	
	if (button === 'business' ) {
	 	dispatch(fetchCorporateTransactions()) 
} else {
		dispatch(fetchPersonalTransactions())
		}
}


	return (
		<div>
			<Container>

			<h1 className='homepage-head'>{`${accountScreen} payments`}</h1>
			{/*if transactions*/}
			<Row>
				<Col sm={12} md={6} lg={4}>
				
				<Card className="card-main" >
						{/*switch the colours here*/}
						<div className={accountScreen === 'business' ? "card-business" : "card-personal"}>
						<Card.Header className={accountScreen === 'business' ? "card-header" : "card-header-personal"} as="h5">Accounts</Card.Header>
							<Card.Body>	
							
							{accountScreen === 'business' ? 
							<div className="logo-div">
							<i className="equals-sign"></i>
								<div className="card-logo">
								<Card.Subtitle className="mb-2 text-muted equals-header">EQUALS</Card.Subtitle>
								<Card.Text className="mb-2 text-muted equals-subheader">Money</Card.Text>
								</div>
							</div>
							 : 
							<div className="fairfx-logo">
							<i className="fa-solid fa-money-check fa-4x personal-icon"></i>
							<Card.Text className="mb-2 text-muted fair-style">Fair</Card.Text>
							<Card.Text className="mb-2 text-muted fx-style">FX</Card.Text>
							</div>
							}

							
							<Link to="/accounts">
							<Button 
							variant="outline-warning" 
							size="lg" 
							className={accountScreen === 'business' ? "business-page-button" : "personal-page-button"}
							onClick={() => fetchAccounts(accountScreen)}
							>Account Details</Button>
							</Link>
						
						</Card.Body>	
					    </div>
				</Card>
				</Col>
				<Col sm={12} md={6} lg={4}>
				<Card className="card-main" >

						<div className={accountScreen === 'business' ? "card-business" : "card-personal"}>
						<Card.Header className={accountScreen === 'business' ? "card-header" : "card-header-personal"} as="h5">Balances</Card.Header>
							<Card.Body>	
							
							{accountScreen === 'business' ? 
							<div className="logo-div">
							<i className="equals-sign"></i>
								<div className="card-logo">
								<Card.Subtitle className="mb-2 text-muted equals-header">EQUALS</Card.Subtitle>
								<Card.Text className="mb-2 text-muted equals-subheader">Money</Card.Text>
								</div>
							</div>
							 : 
							<div className="fairfx-logo">
							<i className="fa-solid fa-money-check fa-4x personal-icon"></i>
							<Card.Text className="mb-2 text-muted fair-style">Fair</Card.Text>
							<Card.Text className="mb-2 text-muted fx-style">FX</Card.Text>
							</div>
							}
			
							<Link to="/balances">
							<Button 
							variant="outline-warning" 
							size="lg" 
							className={accountScreen === 'business' ? "business-page-button" : "personal-page-button"}
							onClick={() => fetchBalances(accountScreen)}
							>Balance</Button>
							</Link>
						

						</Card.Body>	
					    </div>
				</Card>
				
				</Col>
				<Col sm={12} md={6} lg={4}>
				<Card className="card-main" >

						<div className={accountScreen === 'business' ? "card-business" : "card-personal"}>
						<Card.Header className={accountScreen === 'business' ? "card-header" : "card-header-personal"} as="h5">Transactions</Card.Header>
							<Card.Body>	
							
							{accountScreen === 'business' ? 
							<div className="logo-div">
							<i className="equals-sign"></i>
								<div className="card-logo">
								<Card.Subtitle className="mb-2 text-muted equals-header">EQUALS</Card.Subtitle>
								<Card.Text className="mb-2 text-muted equals-subheader">Money</Card.Text>
								</div>
							</div>
							 : 
							<div className="fairfx-logo">
							<i className="fa-solid fa-money-check fa-4x personal-icon"></i>
							<Card.Text className="mb-2 text-muted fair-style">Fair</Card.Text>
							<Card.Text className="mb-2 text-muted fx-style">FX</Card.Text>
							</div>
							}

			
							<Link to="/transactions">
							<Button 
							size="lg" 
							className={accountScreen === 'business' ? "business-page-button" : "personal-page-button"}
							onClick={() => fetchTransactions(accountScreen)}
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