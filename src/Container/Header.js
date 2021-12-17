import { useSelector } from 'react-redux';
import { city } from '../redux/weatherSlice';

function Header() {
    const cityName = useSelector(city);

    return (
        <div className="header">
            <h1 className="header__title">{cityName}</h1>
        </div>
    )
}

export default Header
