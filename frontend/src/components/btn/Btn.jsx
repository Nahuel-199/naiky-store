import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import "./btn.scss";

const Btn = () => {
  return (
    <div className='container__redes'>
    <div className='icon__container__redes'>
      <a target="_blank" rel="noreferrer" href="https://walink.co/70321e">
    <BsWhatsapp className='icon__redes' />
    </a>
    </div>
</div>
  )
}

export default Btn