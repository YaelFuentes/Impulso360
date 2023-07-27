import CarouselComponent from './Animations/Carrousel';
import React, {useState , useEffect } from 'react'

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const homeData = {
    index:'Social media | Paid media | SEO | Desarrollo web | Marketing de contenidos | Ventas',
    firstName: "Impulso360",
    info:'Planes a medida',
    img: "img/hero/2.jpg",
    bio: "En 30 días implementaremos un plan exitoso para impulsar el éxito de tu negocio y acelerar tu éxito empresarial. El reloj está corriendo!",
    bio2:'Fidelización y seguimiento de Clientes'
  };

  const homeData2 = {
    index:'Para Pymes y Empresas que deseen iniciar una transformación y evolución digital',
    firstName: "Impulso360",
    info:'Impulsa tu pymes al siguiente nivel',
    img: "img/hero/3.jpg",
    bio: "Potencia tu presencia digital",
    bio2:'Agenda tu reunión 100% gratuita!'
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
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <CarouselComponent images={images} onSlideChange={handleCarouselSlideChange} currentSlideIndex={currentSlideIndex}/>
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">{currentHomeData.index}</h3>
                <h3 className="name">
                  {currentHomeData.firstName}
                </h3>
                <h3 className="job">
                  {currentHomeData.info}
                </h3>
                <p className="text">{currentHomeData.bio}</p>
                <p className="text">{currentHomeData.bio2}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#service">
                      Saber mas
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{currentHomeData.firstName}</h3>
              <h3 className="stroke_2">{currentHomeData.lastName}</h3>
            </div>
            <div className="right">
              <form className="contact-form bg-transparent">
                <p className="mb-8 text-white md:text-white text-center text-xl font-bold mt-8">Contáctanos</p>
                <input className="w-full mb-4 p-2 rounded-md" type="text" placeholder="Nombre" />
                <input className="w-full mb-4 p-2 rounded-md" type="email" placeholder="Correo electrónico" />
                <input className="w-full mb-4 p-2 rounded-md" type="phone" placeholder="Telefono" />
                <textarea className="w-full mb-4 p-2 rounded-md" placeholder="Mensaje"></textarea>
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

