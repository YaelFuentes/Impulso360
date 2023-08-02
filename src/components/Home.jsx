/* import Counter from "./Counter"; */
import ImgBackground from '../../public/img/hero/background.png'
import CarouselComponent from './Animations/Carrousel';
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const homeData = {
    index: 'Social media | Paid media | SEO | Desarrollo web | Marketing de contenidos | Ventas',
    firstName: "Impulso360",
    info: 'Impulsa tu pyme o empresa al siguiente nivel',
    img: "img/hero/2.jpg",
    bio: "Atrae clientes de forma masiva",
    bio2: 'Agenda tu reunión 100% gratuita!'
  };

  const homeData2 = {
    index: 'Para Pymes y Empresas que deseen iniciar una transformación y evolución digital',
    firstName: "Impulso360",
    info: 'Planes a medida',
    img: "img/hero/3.jpg",
    bio: "En 30 días implementaremos un plan exitoso para impulsar el éxito de tu negocio y acelerar tu éxito empresarial. El reloj está corriendo!",
    bio2: 'Fidelizacion y seguimiento de clientes'
  };
  const images = [
    { src: '/imagenes/carousel/carousel1.jpg', alt: 'Image 1' },
    { src: '/imagenes/carousel/carousel2.jpg', alt: 'Image 2' },
  ];

  const handleCarouselSlideChange = (currentIndex) => {
    setCurrentSlideIndex(currentIndex);
  };

  useEffect(() => {
    const updatedHomeData = currentSlideIndex === 0 ? homeData : homeData2;
    setCurrentHomeData(updatedHomeData);
  }, [currentSlideIndex]);
  const [currentHomeData, setCurrentHomeData] = useState(homeData);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('¡Correo enviado con éxito!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <CarouselComponent images={images} onSlideChange={handleCarouselSlideChange} currentSlideIndex={currentSlideIndex} />
        </div>
        <div className="container ">
          <div className="content">

            <div className="left">
              <div className="inner md:pt-10">
                <h3 className="hello hidden md:block">{currentHomeData.index}</h3>
                <h3 className="name">
                  {homeData.firstName}
                </h3>
                <h3 className="job">
                  {/* {homeData.designation} from {homeData.address} */}
                  Una nueva forma de impulsar tu negocio digital
                </h3>
                <p className="text">{currentHomeData.bio}</p>
                <p className="text hidden md:block">{currentHomeData.bio2}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor hidden" href="#service">
                      Saber mas
                    </a>
                  </div>
                </div>
                <h3 className="stroke_1">{currentHomeData.firstName}</h3>
                <h3 className="stroke_2">{currentHomeData.lastName}</h3>
              </div>
            </div>
            <div className="right md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <form className="contact-form bg-transparent" onSubmit={handleSubmit}>
                <p className="mb-8 text-white md:text-white text-center text-xl font-bold mt-8 hidden md:block">Contáctanos</p>
                <input className="w-full mb-4 p-2 rounded-md" type="text" placeholder="Nombre" onChange={handleChange}/>
                <input className="w-full mb-4 p-2 rounded-md" type="email" placeholder="Correo electrónico" onChange={handleChange} />
                <input className="w-full mb-4 p-2 rounded-md" type="phone" placeholder="Telefono" onChange={handleChange}/>
                <textarea className="w-full mb-4 p-2 rounded-md" placeholder="Mensaje" onChange={handleChange}></textarea>
                <button className="w-full bg-blue hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md" type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

