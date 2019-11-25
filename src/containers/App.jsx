import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouiselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: []});

  useEffect(() => {
    fetch("http://localhost:3000/initalState")
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);
 console.log(videos);
  return (
    <div className="App">
      <Header />
      <Search />

	{videos.mylist.length > 0 &&
		<Categories title="Titulo 1">
        <Carousel>
          <CarouiselItem />
        </Carousel>
      </Categories>
	}
      

      <Categories title="tendencias">
        <Carousel>
		{videos.trends.map( item => 
			<CarouiselItem key={item.id} {...item}/>
		)}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
