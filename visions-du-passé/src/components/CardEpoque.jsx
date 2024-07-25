import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/CardEpoque.css'
function CardEpoque({data}) {
    console.log(data)
    return (
        <div className='card-epoque'>
            <Link key={data.id} to={data.epoqueLink}>
                <img className='card-img-epoque' src={data.imgSrc} alt={data.name} />
                <span className='card-titre-epoque'>{data.name} </span>
                <span className='card-date-epoque'> {data.date} </span>
            </Link>
        </div>
    )
}
CardEpoque.propTypes = {
    data: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardEpoque