import express from 'express';
import axios from 'axios';
import cors from 'cors';
// var https = require('https');
// const axios = require('axios');

const app = express();
//restore for client side
app.use(cors());
// var router = express.Router()  

app.listen(5000, () => console.log('api running on port 5000'))

app.get('/', (req, res) => res.json('My API running'))

app.get('/api/corporateaccounts', async (req, res) => {
 
  try {
        const response = await axios.get('https://sandbox.equals.co/api/corporate/v3.1/accounts')

        res.send(response.data.Data.Account)
      }
      catch (err) {
          console.log(err)
      }
})


app.get('/api/corporatebalances', async (req, res) => {
 
  try {
        const response = await axios.get('https://sandbox.equals.co/api/corporate/v3.1/balances')               
        res.send(response.data.Data.Balance)
    }
    catch (err) {
        console.log(err)
    }
})


app.get('/api/corporatetransactions', async (req, res) => {
 
  try {
        const response = await axios.get('https://sandbox.equals.co/api/corporate/v3.1/transactions')               
        res.send(response.data.Data.Transaction)
    }
    catch (err) {
        console.log(err)
    }
})




app.get('/api/personalaccounts', async (req, res) => {


  try {
        const response = await axios.get('https://sandbox.equals.co/api/retail/v3.1/accounts')
        res.send(response.data.Data.Account)
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/api/personalbalances', async (req, res) => {

  try {
        const response = await axios.get('https://sandbox.equals.co/api/retail/v3.1/balances')
 
        res.send(response.data.Data.Balance)
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/api/personaltransactions', async (req, res) => {
 
  try {
        const response = await axios.get('https://sandbox.equals.co/api/retail/v3.1/transactions')               
        res.send(response.data.Data.Transaction)
    }
    catch (err) {
        console.log(err)
    }
})