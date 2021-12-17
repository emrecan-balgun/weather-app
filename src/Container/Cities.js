import react from 'react';

function City() {
    return (
        <div className="cities">
            <input 
                type="text"
                // value={text}
                onChange={(e) => console.log(e.target.value)}
                className="cities__input"
                placeholder="Please enter a city name.."
            />
        </div>
    )
}

export default City
