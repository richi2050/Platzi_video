import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import Play from '../assets/static/play-icon.png';
import Plus from '../assets/static/plus-icon.png';

const CarouiselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;
  const handledsetFavorite = () => {
    props.setFavorite({
      cover, title, year, contentRating, duration
    });
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={Play} alt='Play Icon' />
          <img className='carousel-item__details--img' src={Plus} alt='Plus Icon' onClick={handledsetFavorite}/>
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  )
};
CarouiselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouiselItem);
/*export default CarouiselItem;*/
