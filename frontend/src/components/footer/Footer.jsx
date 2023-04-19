import React from "react";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Payment from "../../assets/payments.png";
import "./footer.scss";

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">Acerca de nosotros</div>
          <div className="text">
            Somos un emprendimiento, dedicado a vender zapatillas, en varios
            colores, como diferentes tipo y marcas. Nos especializamos
            en zapatillas importadas...
          </div>
        </div>
        <div className="col">
          <div className="title">Contacto</div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Teléfono: 1123359620</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: naiky@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categorías</div>
          <Link to="/products/nike">
          <span className="text">Zapatillas Nike</span>
          </Link>
          <Link to="/products/adidas">
          <span className="text">Zapatillas Adidas</span>
          </Link>
          <Link to="/products/vans">
          <span className="text">Zapatillas Vans</span>
          </Link>
          <Link to="/products/puma">
          <span className="text">Zapatillas Puma</span>
          </Link>
          <Link to="/products/reebok">
          <span className="text">Zapatillas Reebok</span>
          </Link>
        </div>
        <div className="col">
          <div className="title">Paginas</div>
          <span className="text">Home</span>
          <span className="text">Nosotros</span>
          <span className="text">Política de privacidad</span>
          <span className="text">Términos y condiciones</span>
          <span className="text">Contáctenos</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            NAIKY-STORE 2023 CREADO POR NAHUEL CERNADAS. SOLUCIONES PREMIUM DE
            COMERCIO ELECTRÓNICO.
          </span>
          <img src={Payment} alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
