import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouiselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
	const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />

	{initialState.mylist.length > 0 &&
		<Categories title="Titulo 1">
        <Carousel>
          <CarouiselItem />
        </Carousel>
      </Categories>
	}
      

      <Categories title="tendencias">
        <Carousel>
		{initialState.trends.map( item => 
			<CarouiselItem key={item.id} {...item}/>
		)}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
