import axios from 'axios';
import { useState, useEffect } from 'react';
import Select from 'react-select'

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


    const option = [];

    if(data != null) {
        data.map((item) => {
            const obj = new Object();
            obj.value = `${item.country_name}`
            obj.label = `${item.country_name}`
            option.push(obj)
        }        
        )
    }

    function changeHandler(value) {
        console.log(value.label);
    }

    return (
        <div className="cities">
            <Select
                onChange={changeHandler}
                options={option}
                isSearchable
                isClearable
            />
        </div>
    )
}

export default City
