import axios from 'axios';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';


function City() {
   let deneme = false;
   const [data, setData] = useState('');

    const axios = require('axios');
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJkZWF0aGx5Z3JhdmVAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiamFpYTQxQTdEbENZUDlnTk1QeFY5bnNhYjlDOFl2LTlWWXd1S0dlUEpHZXNCU2ttZldUYWhzbkRDQWo0QXRkQkptNCJ9LCJleHAiOjE2Mzk3NDU2NjF9.pNMHxjMBxgZT5ZLP7l4Bk_kEzhBa7uQ4ho4ojRaLx3U",
        "Accept": "application/json"
    }
        
useEffect(() => {
    const res = axios.get('https://www.universal-tutorial.com/api/countries', {
    headers: headers
    })
       .then(response => {
           setData(response.data);
        })
}, [])


    return (
        <ul>
            {
                data.map(country => <li key={nanoid}>{country.country_name}</li>)
            }
        </ul>
    )
}

export default City
