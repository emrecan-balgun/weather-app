import { useDispatch } from 'react-redux';
import { changeCity } from '../redux/weatherSlice';

function Cities() {
    const dispatch = useDispatch();

    return (
        <div className="cities">
            <input 
                type="text"
                onChange={(e) => dispatch(changeCity(e.target.value))}
                className="cities__input"
                placeholder="Please enter a city name.."
            />
        </div>
    )
}

export default Cities
