import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

            <div className="home__row">
                <Product 
                    id="0"
                    title="Samsung Galaxy S10 Plus (Black, 8GB RAM, 128GB Storage)"
                    price={800.34}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31JAyj81SrL._AC_US160_FMwebp_QL70_.jpg"/>
                <Product 
                    id="1"
                    title="The Alchemist Paperback – 17 October 2005"
                    price={100.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="2"
                    title="Samsung Galaxy S10 Plus (White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={900.09}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61dvlh%2BCsqL._SL1500_.jpg" 
                />
                <Product 
                    id="3"
                    title="ASGARD Day & Date Feature Watch for Men, Boys-158-DD1"
                    price={300.00}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41XdRy2BxfL.jpg" 
                />
                <Product 
                    id="4"
                    title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
                    price={200}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="5"
                    title="Echo Plus (2nd Gen) – Premium sound, powered by Dolby, built-in Smart Home hub (Black)"
                    price={300.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61FF8bnIGQL._SL1000_.jpg" 
                />
            </div>
        </div>
    
    </div>
  );
}

export default Home;
