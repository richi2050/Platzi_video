import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import Play from '../assets/static/play-icon.png';
import Plus from '../assets/static/plus-icon.png';
import PropTypes from 'prop-types';

const CarouiselItem = ({ cover, title, year, contentRating, duration}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={ Play } alt="Play Icon" />
                <img className="carousel-item__details--img" src={ Plus } alt="Plus Icon" />
            </div>
            <p className="carousel-item__details--title">{ title }</p>
            <p className="carousel-item__details--subtitle">
            { `${year} ${contentRating} ${duration}` }
            </p>
        </div>
    </div>
);
CarouiselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}
export default CarouiselItem;
