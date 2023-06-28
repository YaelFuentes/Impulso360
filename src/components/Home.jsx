/* import Counter from "./Counter"; */

const homeData = {
  firstName: "Impulso360",
  img: "img/hero/2.jpg",
  imgIg: "imagenes/redes/instagram.png",
  fb: "imagenes/redes/fb.png",
  bio: "Para pymes y empresas que deseen iniciar una transformacion y evolucion digital",
  numberOfProject: 30,
  numberofyear: 2,
};

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/1_1.png" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', opacity: 0.5, }} />
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
              <div className="image">
                <img src="img/thumbs/53-61.jpg" alt="" />
                <div className="main" data-img-url={homeData.img} />
                <div className="w-full h-auto">
                  <img src="../../public/imagenes/redes/instagram.png" alt="" />
                </div>
                <div className="numbers year">
                  <div className="wrapper">
                    <div className="main" data-img-url={homeData.imgIg} />
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                  <div className="main" data-img-url={homeData.fb} />
                  </div>
                </div>
                {/*  <span className="circle anim_circle">
                  <img src="img/hero/circle.png" alt="" />
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
