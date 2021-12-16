import axios from 'axios';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';


function City() {
   const [data, setData] = useState([]);

    const headers = {
        "Authorization": process.env.REACT_APP_API_KEY,
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
                data.map((item) => (
                    <li key={nanoid}>{item.country_name}</li>
                ))
            }
        </ul>
    )
}

export default City
