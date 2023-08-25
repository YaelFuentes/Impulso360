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
    bio: `En 30 días implementaremos un plan exitoso para impulsar el éxito de tu negocio y acelerar tu éxito empresarial. El reloj está corriendo!`,
    bio2: 'Fidelizacion y seguimiento de clientes'
  };
  const images = [
    { src: '/imagenes/carousel/carousel1.jpg', alt: 'Image 1' },
    { src: '/imagenes/carousel/carousel4.jpg', alt: 'Image 2' },
  ];

  const handleCarouselSlideChange = (currentIndex) => {
    setCurrentSlideIndex(currentIndex);
  };

  useEffect(() => {
    const updatedHomeData = currentSlideIndex === 0 ? homeData : homeData2;
    setCurrentHomeData(updatedHomeData);
  }, [currentSlideIndex]);
  const [currentHomeData, setCurrentHomeData] = useState(homeData);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Correo enviado exitosamente');
        // Haz algo aquí después de enviar el correo exitosamente
      } else {
        console.error('Error al enviar el correo');
        // Manejo de errores aquí
      }
    } catch (error) {
      console.error('Error:', error);
      // Manejo de errores aquí
    }
  };
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero md:h-[110vh] h-[170vh] ">
        <div className="background">
          <CarouselComponent images={images} onSlideChange={handleCarouselSlideChange} currentSlideIndex={currentSlideIndex} />
        </div>
        <div className="container ">
          <div className="content">

            <div className="left max-[800px]:mt-44">
              <div className="inner">
                <h3 className="hello">{currentHomeData.index}</h3>
                <h3 className="name">
                  {homeData.firstName}
                </h3>
                <h3 className="job">
                  Una nueva forma de impulsar tu negocio digital
                </h3>
                <p className="text">{currentHomeData.bio}</p>
                <p className="text">{currentHomeData.bio2}</p>
                <h3 className="stroke_1">{currentHomeData.firstName}</h3>
                <h3 className="stroke_2">{currentHomeData.lastName}</h3>
              </div>
            </div>
            <div className="flex justify-end p-4 ">
              <div className="md:w-1/2 md:ml-4 sm:m-10 mt-48">
                <form className="contact-form bg-transparent" onSubmit={handleSubmit}>
                  <p className='text-gray-200 p-4 font-sans max-[425px]:text-black'>
                    Completa HOY tus datos. Tienes una asesoría y cotización a medida 100% gratuita
                  </p>
                  <input className="w-11/12 mb-4 p-1 rounded-md sm:w-full 
                  sm:mx-auto" value={formData.name} type="text"
                    name="name" placeholder="Nombre" onChange={handleChange} />
                  <input className="w-11/12 mb-4 p-2 rounded-md sm:w-full sm:mx-auto" value={formData.email} type="email"
                    name="email" placeholder="Correo electrónico" onChange={handleChange} />
                  <input className="w-11/12 mb-4 p-2 rounded-md sm:w-full sm:mx-auto" value={formData.phone} type="number"
                    name="phone" placeholder="Telefono" onChange={handleChange} />
                  <textarea className="w-11/12 mb-4 p-2 rounded-md sm:w-full sm:mx-auto" name="message" value={formData.message} placeholder="Mensaje" onChange={handleChange}></textarea>
                  <button className="w-11/12 sm:w-full bg-blue-600 text-white font-bold py-2 px-6 rounded-md" type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

