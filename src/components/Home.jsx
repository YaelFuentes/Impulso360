import { Player, Controls } from '@lottiefiles/react-lottie-player';
import LottiePlayer from './Animations/Home';
import CarouselComponent from './Animations/Carrousel';

const homeData = {
  firstName: "Impulso360",
  img: "img/hero/2.jpg",
  imgIg: "imagenes/redes/instagram.png",
  fb: "imagenes/redes/fb.png",
  bio: "Para pymes y empresas que deseen iniciar una transformacion y evolucion digital",
  numberOfProject: 30,
  numberofyear: 2,
};

const images = [
  { src: '/imagenes/carousel/carousel1.jpg', alt: 'Image 1'},
  { src: '/imagenes/carousel/carousel2.jpg', alt: 'Image 2'},
  { src: '/imagenes/carousel/carousel3.jpg', alt: 'Image 3'},
];

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
        <CarouselComponent images={images}/>
        </div> 
        <div className="container">
          <div className="content">
          
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hola, te presentamos</h3>
                <h3 className="name">
                  {homeData.firstName} {/* {homeData.lastName} */}
                </h3>
                <h3 className="job">
                  {/* {homeData.designation} from {homeData.address} */}
                  Una nueva forma de impulsar tu negocio digitals
                </h3>
                <p className="text">{homeData.bio}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Saber mas
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      Sobre Nosotros
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </div>
            <div className="right">
              {/* <LottiePlayer/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

