import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../assets/bannerZapas.png";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>OFERTAS</h1>
          <p>De viernes a domingo zapatillas al 10%</p>
          <p style={{fontSize: "3rem"}}>Que estas esperando</p>
          <p>¡haga su pedido!</p>
          <div className="ctas">
            <Link to="/products">
              <div className="banner-cta v2">Comprar Ahora</div>
            </Link>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="bannerimg" />
      </div>
    </div>
  );
};

export default Banner;
