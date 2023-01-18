// export const accountDetails = [{
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
// ]

export const retailAccount = [
{
  "Meta": {
    "TotalPages": 1,
    "FirstAvailableDateTime": "2020-07-17T10:52:18Z",
    "LastAvailableDateTime": "2020-07-17T10:52:18Z"
  },
  "Data": {
    "Transaction": [
      {
        "TransactionId": "784527",
        "AccountId": "123",
        "CreditDebitIndicator": "Credit",
        "Status": "Booked",
        "BookingDateTime": "2020-07-17T10:52:18Z",
        "Amount": {
          "Amount": "1230.00",
          "Currency": "GBP"
        },
        "MerchantDetails": {
          "MerchantName": "Paypal",
          "MerchantCategoryCode": "5932"
        },
        "TransactionInformation": "UNQD497"
      }
    ]
    }
  }   
]

//export default retailAccount;

//this is for account details

// const retailAccount = [
// {
//   "Meta": {
//     "TotalPages": 1,
//     "FirstAvailableDateTime": "2020-07-17T10:52:18Z",
//     "LastAvailableDateTime": "2020-07-17T10:52:18Z"
//   },
//   "Data": {
//     "Account": [
//       {
//         "AccountId": "123",
//         "Currency": "EUR",
//         "AccountType": "Personal",
//         "AccountSubType": "CurrencyCard",
//         "Description": "Currency card",
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
// ]


