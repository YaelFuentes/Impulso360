import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ScrollTop = () => {
  const iconStyle = {
    position: 'fixed',
    width: '55px',
    height: '55px',
    bottom: '30px',
    right: '30px',
    background: '#0df053',
    color: '#fff',
    borderRadius: '50px',
    textAlign: 'center',
    boxShadow: '0px 1px 10px rgba(0,0,0,0.3)',
    zIndex: '100',
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center', // Centra verticalmente
  };

  return (
    <div className="progressbar">
      <a
        href="https://api.whatsapp.com/send?phone=56995899154"
        target="_blank"
        style={iconStyle}
      >
        <FaWhatsapp style={{width:'35px', height:'35px'}} />
      </a>
    </div>
  );
};

export default ScrollTop;