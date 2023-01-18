import React from 'react'
// @ts-ignore
import retailAccount from '../account';
// import { accountDetails } from '../account';
import moment from 'moment';
import { Row, Col, Container, Card, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../hooks'
import { Link } from 'react-router-dom';


type paymentsType = Array<{
	// Account: Array<{SchemeName: string, Identification: string, Name: string, SecondaryIdentification: string}>,
	AccountId: string,
	AccountSubType: string,
	AccountType: string,
	Currency: string,
	Description: string,
}>

interface CorporateScreenType {
	AccountsScreen: () => void
}

const AccountsScreen: React.FC = () => {
	

	// let corpPayments: Array<{ 
	// AccountId: string,
	// AccountSubType: string,
	// AccountType: string,
	// Currency: string,
	// Description: string,
	// }> = payments['payments']
	

	const accountsScreen: any = useAppSelector((state) => state?.accountsScreen['screen'])

	const personalAccounts = useAppSelector((state) => state.personalAccounts['payments'])
	const corporateAccounts = useAppSelector((state) => state.corporateAccounts['payments'])
	let accountSelection: any;
	// console.log('personalAccounts ', personalAccounts) 
	
	// console.log('accountSelection ', accountSelection) 

	accountsScreen === 'personal' ? accountSelection = personalAccounts : accountSelection = corporateAccounts;
	// accountSelection = corporateAccounts;
	// if(accountSelection) {
	// console.log('personslAccounts ', personalAccounts)
	// console.log('corporateAccounts ', corporateAccounts)
	// } 


	return (
	
		!accountSelection ? <h2>loading</h2> :
		<div>
			<Container>
			
			<h1 className='homepage-head'>{`${accountsScreen} accounts`}</h1>
			
			<Row>
				{accountSelection.map((account: any) => {	
				

					return <Col sm={12} md={6} lg={4}>
							<Card className="card-main card-transactions" >
							
							<div className={accountsScreen === 'business' ? "card-business" : "card-personal"}>
							<Card.Header className={accountsScreen === 'business' ? "card-header" : "card-header-personal"} as="h5">
							Account
							</Card.Header>
								<Card.Body>	
								

								 <div className="wrapper">
								 	<div className="one">AccountId</div>
								 	<div className="two">AccountSubType</div>
								 	<div className="three">AccountType</div>
								 	<div className="four">Currency</div>
								 	<div className="five">Description</div>	
								 	<div className="six">{account.AccountId}</div>
								 	<div className="seven">{account.AccountSubType}</div>
								 	<div className="eight">{account.AccountType}</div>
								 	<div className="nine">{account.Currency}</div>
								 	<div className="ten">{account.Description}</div>

								 </div>
								 </Card.Body>	
						    </div>
						</Card>	
						</Col>		
					})
				}
			</Row>
			</Container>
			</div>
				)
			}
					

export default AccountsScreen;



// const accountDetails = {
//   "Meta": {
//     "TotalPages": 1,
//     "FirstAvailableDateTime": "2020-07-17T10:52:16Z",
//     "LastAvailableDateTime": "2020-07-17T10:52:16Z"
//   },
//   "Data": {
//     "Account": [
//       {
//         "AccountId": "123",
//         "Currency": "EUR",
//         "AccountType": "Business",
//         "AccountSubType": "PrePaidCard",
//         "Description": "Euro card",
//         "Account": {
//           "SchemeName": [
//             "UK.OBIE.BBAN",
//             "UK.OBIE.IBAN",
//             "UK.OBIE.PAN",
//             "UK.OBIE.Paym",
//             "UK.OBIE.SortCodeAccountNumber"
//           ],
//           "Identification": "1222333344441113",
//           "Name": "John Johnson",
//           "SecondaryIdentification": "1234"
//         }
//       }
//     ]
//   }
// }



// const Balance = [{
//   "Meta": {
//     "TotalPages": 1,
//     "FirstAvailableDateTime": "2020-07-17T10:52:16Z",
//     "LastAvailableDateTime": "2020-07-17T10:52:16Z"
//   },
//   "Data": {
//     "Balance": [
//       {
//         "AccountId": "123",
//         "Amount": {
//           "Amount": "1230.00",
//           "Currency": "GBP"
//         },
//         "CreditDebitIndicator": "Credit",
//         "Type": "ClosingAvailable",
//         "DateTime": "2020-07-17T10:52:16Z"
//       }
//     ]
//   }
// }
// ]



// <Card className="card-main card-transactions" >

// 						<div className="card-business">
// 						<Card.Header className="card-header" as="h5">Account</Card.Header>
// 							<Card.Body>	
								
// 							 <div className="wrapper">
// 							 	<div className="one">Name</div>
// 							 	<div className="two">Account No</div>
// 							 	<div className="three">Currency</div>
// 							 	<div className="four">Account Type</div>
// 							 	<div className="five">Description</div>	
// 							 	<div className="six">{account.Account.Name}</div>
// 							 	<div className="seven">{account.AccountId}</div>
// 							 	<div className="eight">{account.Currency}</div>
// 							 	<div className="nine">{account.AccountType}</div>
// 							 	<div className="ten">{account.Description}</div>

// 							 </div>
// 							 </Card.Body>	
// 					    </div>
// 				</Card>
// 				</Col>
// 				<Col sm={12} md={6} lg={6}>
				
// 				<Card className="card-main" >

// 						<div className="card-business">
// 						<Card.Header className="card-header" as="h5">Balance</Card.Header>
// 							<Card.Body>	

// 							 <div className="wrapper">
// 							 	<div className="one">Amount</div>
// 							 	<div className="two">Credit</div>
// 							 	<div className="three">Type</div>
// 							 	<div className="four">Date</div>
// 							 	<div className="five">AccountId</div>	
// 							 	<div className="six">{balance.Amount.Currency + balance.Amount.Amount}</div>
// 							 	<div className="seven">{balance.CreditDebitIndicator}</div>
// 							 	<div className="eight">{balance.Type}</div>
// 							 	<div className="nine">{date}</div>
// 							 	<div className="ten">{balance.AccountId}</div>

// 							 </div>
// 							 </Card.Body>	
// 					    </div>
// 				</Card>
// 				</Col>	
// 				</Row>
				
// 				<Row>
// 				<Col sm={12} md={12} lg={12}>
// 				<Card className="card-main" >

// 						<div className="card-business">
// 						<Card.Header className="card-header" as="h5">Transactions</Card.Header>
// 							<Card.Body>	

// 							 <div className="wrapper-extra-margin">
// 							 	<div className="one">Payee</div>
// 							 	<div className="two">Amount</div>
// 							 	<div className="three">Date</div>
// 							 	<div className="four">Account ID</div>
// 							 	<div className="five">Transaction ID</div>	
// 							 	<div className="six">{payments.MerchantDetails.MerchantName}</div>
// 							 	<div className="seven">{payments.Amount.Currency + payments.Amount.Amount}</div>
// 							 	<div className="eight">{dateConversion}</div>
// 							 	<div className="nine">{payments.AccountId}</div>
// 							 	<div className="ten">{payments.TransactionId}</div>

// 							 </div>
// 							 </Card.Body>
// 							 <div className="line"></div>
// 							<Card.Body>	

// 							 <div className="wrapper-extra-margin">
// 							 	<div className="one">Payee</div>
// 							 	<div className="two">Amount</div>
// 							 	<div className="three">Date</div>
// 							 	<div className="four">Account ID</div>
// 							 	<div className="five">Transaction ID</div>	
// 							 	<div className="six">{payments.MerchantDetails.MerchantName}</div>
// 							 	<div className="seven">{payments.Amount.Currency + payments.Amount.Amount}</div>
// 							 	<div className="eight">{dateConversion}</div>
// 							 	<div className="nine">{payments.AccountId}</div>
// 							 	<div className="ten">{payments.TransactionId}</div>

// 							 </div>
// 							 </Card.Body>					
// 							<div className="line"></div>
							
// 					    </div>
// 				</Card>






	{/*<Card className="card-main" >
							 <div className="card-business card-transactions">
								<Card.Header className="card-header-transactions" as="h5">Transactions</Card.Header>
								<Card.Body>	
						
								<Table striped bordered hover responsive="sm" variant="dark" className='table'>
							      <thead>
							        <tr>
							          <th>Payee</th>
							          <th>Amount</th>
							          <th>Date</th>
							          <th>Account ID</th>
							          <th>Transaction ID</th>
							        </tr>
							      </thead>
							      <tbody>
							        <tr>
							          <td>{payments.MerchantDetails.MerchantName}</td>
							          <td>{payments.Amount.Currency + payments.Amount.Amount}</td>
							          <td>{dateConversion}</td>
							          <td>{payments.AccountId}</td>
							          <td>{payments.TransactionId}</td>
							        </tr>
							        
							    
							      </tbody>
							    </Table>
							   </Card.Body>	
					    </div>
				</Card>
				*/}				 



							{/*<div className="logo-div">
							<i className="equals-sign"></i>
								<div className="card-logo">
								<Card.Subtitle className="mb-2 text-muted equals-header">EQUALS</Card.Subtitle>
								<Card.Text className="mb-2 text-muted equals-subheader">Money</Card.Text>
								</div>
							</div>

							
							<Link to="/payments">
							<Button 
							variant="outline-warning" 
							size="lg" 
							className="business-page-button"
							
							>Account Details</Button>
							</Link>*/}
			


			// const businessPayments = corporatePayments?.map((account: any) => {	
						
					
			// 			<Card className="card-main card-transactions" >

			// 				<div className="card-business">
			// 				<Card.Header className="card-header" as="h5">Account</Card.Header>
			// 					<Card.Body>	
								

			// 					 <div className="wrapper">
			// 					 	<div className="one">AccountId</div>
			// 					 	<div className="two">AccountSubType</div>
			// 					 	<div className="three">AccountType</div>
			// 					 	<div className="four">Currency</div>
			// 					 	<div className="five">Description</div>	
			// 					 	<div className="six">{account.AccountId}</div>
			// 					 	<div className="seven">{account.AccountSubType}</div>
			// 					 	<div className="eight">{account.AccountType}</div>
			// 					 	<div className="nine">{account.Currency}</div>
			// 					 	<div className="ten">{account.Description}</div>

			// 					 </div>
			// 					 </Card.Body>	
			// 			    </div>
			// 			</Card>
					
			// 				}
			// 			)
					
			
			


// !corpPayments ? <h2>loading</h2> : 