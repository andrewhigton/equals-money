import React from 'react'
// @ts-ignore
import retailAccount from '../account';
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
	TransactionsScreen: () => void
}

const TransactionsScreen: React.FC = () => {
	
// 	let corporatePayments: Array<{ 
// 	AccountId: string,
// 	AccountSubType: string,
// 	AccountType: string,
// 	Currency: string,
// 	Description: string,
// }> = payments['data']
	
	const accountsScreen: any = useAppSelector((state) => state?.accountsScreen['screen'])
	const personalTransactions = useAppSelector((state) => state.personalAccounts['data'])
	const corporateTransactions = useAppSelector((state) => state.corporateAccounts['data'])
	let accountSelection: any;


	accountsScreen === 'personal' ? accountSelection = personalTransactions : accountSelection = corporateTransactions;
		
		

	return (

		!accountSelection ? <h2>loading</h2> :
		

		<div>
			<Container>	
					<Row>
					{accountSelection.map((account: any) => {	
						
						let dateConversion = moment(account.DateTime).format('MMMM D YYYY, h:mma')
						
						return <Col sm={12} md={6} lg={4}>
							<Card className="card-main card-transactions" >
							
							<div className={accountsScreen === 'business' ? "card-business" : "card-personal"}>
							<Card.Header className={accountsScreen === 'business' ? "card-header" : "card-header-personal"} as="h5">
							Balance
							</Card.Header>
								<Card.Body>	
								

								 <div className="wrapper">
								 	<div className="one">AccountId</div>
								 	<div className="two">Amount</div>
								 	<div className="three">Credit/Debit</div>
								 	<div className="four">Date</div>
								 	<div className="five">Status</div>	
								 	<div className="six">{account.AccountId}</div>
								 	<div className="seven">{account.Amount.Currency} {account.Amount.Amount}</div>
								 	<div className="eight">{account.CreditDebitIndicator}</div>
								 	<div className="nine">{dateConversion}</div>
								 	<div className="ten">{account.Status}</div>

								 </div>
								 </Card.Body>	
						    </div>
						</Card>	
						</Col>		
						})}
				</Row>
			</Container>
		</div>	
		)
	}				

export default TransactionsScreen;