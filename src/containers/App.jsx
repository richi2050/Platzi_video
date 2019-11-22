import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouiselItem from "../components/CarouselItem";

import "../assets/styles/App.scss";

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories>
      <Carousel>
        <CarouiselItem />
        <CarouiselItem />
        <CarouiselItem />
        <CarouiselItem />
        <CarouiselItem />
        <CarouiselItem />
      </Carousel>
    </Categories>
  </div>
);

export default App;
