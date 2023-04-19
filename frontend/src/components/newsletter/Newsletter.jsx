import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./newsletter.scss";

const Newsletter = () => {

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Novedades</span>
                <span className="big-text">
                REGÍSTRESE PARA RECIBIR LAS ÚLTIMAS ACTUALIZACIONES Y OFERTAS
                </span>
                <div className="form">
                    <input type="text" placeholder="Dirección de email" />
                    <button>Subscribite</button>
                </div>
                <span className="text">
                Se utilizará de acuerdo con nuestra Política de Privacidad
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter