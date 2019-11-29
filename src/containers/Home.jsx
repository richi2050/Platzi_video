import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouiselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
/*import useInitialState from '../hooks/useInitialState';*/


/*const API = 'http://localhost:3000/initalState';*/

const Home = ({ mylist, trends, originals}) => {
  /*const initialState = useInitialState(API);*/
  return (
    <>
      <Search />
      {mylist.length > 0 &&
        <Categories title='Titulo 1'>
          <Carousel>
            <CarouiselItem />
          </Carousel>
        </Categories>
      }
      <Categories title='tendencias'>
        <Carousel>
          {trends.map(item =>
            <CarouiselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title='Originales '>
        <Carousel>
          {originals.map(item =>
            <CarouiselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state =>{
  return {
    mylist: state.myList,
    trends: state.trends,
    originals: state.originals 
  }
}


//export default Home; /* forma de exportar un copmponente normal */
export default connect(mapStateToProps, null)(Home); /* esta es la forma de exportatr un componente  ya conectado */