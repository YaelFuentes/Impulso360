import CarouselComponent from './Animations/Carrousel';

const homeData = {
  firstName: "Impulsa tu pyme o empresa al siguiente nivel",
  img: "img/hero/2.jpg",
  imgIg: "imagenes/redes/instagram.png",
  fb: "imagenes/redes/fb.png",
  bio: "Potenciá tu presencia digital atrayendo clientes de forma masiva, agenda tu reunión 100% gratuita",
  numberOfProject: 30,
  numberofyear: 2,
};

const images = [
  { src: '/imagenes/carousel/carousel1.jpg', alt: 'Image 1' },
  { src: '/imagenes/carousel/carousel2.jpg', alt: 'Image 2' },
  { src: '/imagenes/carousel/carousel3.jpg', alt: 'Image 3' },
];

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <CarouselComponent images={images} />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <p >SOCIAL MEDIA | PAID MEDIA | SEO | DESARROLLO WEB | MARKETING DE CONTENIDO | VENTAS</p>
                <h3 className="name">
                  {homeData.firstName} {/* {homeData.lastName} */}
                </h3>
                <h3 className="job">
                  {/* {homeData.designation} from {homeData.address} */}
                  Una nueva forma de impulsar tu negocio digital
                </h3>
                <p className="text">{homeData.bio}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#service">
                      Saber mas
                    </a>
                  </div>
                  {/* <div className="simple_button">
                    <a className="anchor" href="#about">
                      Sobre Nosotros
                    </a>
                  </div> */}
                </div>
              </div>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </div>
            <div className="right">
              {/* Aquí se agrega el formulario de contacto */}
              <form className="contact-form bg-transparent">
                <h3 className="mb-4 text-white md:text-white text-center text-xl font-bold">Contáctanos</h3>
                <input className="w-full mb-4 p-2 rounded-md" type="text" placeholder="Nombre" />
                <input className="w-full mb-4 p-2 rounded-md" type="email" placeholder="Correo electrónico" />
                <input className="w-full mb-4 p-2 rounded-md" type="email" placeholder="Telefono de contacto" />
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

