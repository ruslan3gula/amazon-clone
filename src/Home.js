import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  const image =
    "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg";
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id={4053256}
            title={"The Lean Start"}
            price={19.99}
            image={image}
            rating={5}
          />
          <Product
            id={4053257}
            title={"The Lean Start"}
            price={19.99}
            image={image}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={4053258}
            title={"The Lean Start"}
            price={19.99}
            image={image}
            rating={5}
          />
          <Product
            id={4053259}
            title={"The Lean Start"}
            price={19.99}
            image={image}
            rating={5}
          />
          <Product
            id={40532510}
            title={"The Lean Start"}
            price={19.99}
            image={image}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={4053261}
            title={"The Lean Start"}
            price={19.99}
            image={image}
            rating={5}
          />
        </div>
      </div>
      <div className="product_rating"></div>
    </div>
  );
}
