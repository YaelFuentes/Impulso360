/* import Counter from "./Counter"; */
import ImgBackground from '../../public/img/hero/background.png'

const homeData = {
  firstName: "Impulso360",
  /* lastName: "Smith", */
  /* designation: "Web Developer",
  address: "New York", */
  img: "img/hero/2.jpg",
  bio: "Para pymes y empresas que deseen iniciar una transformacion y evolucion digital",
  numberOfProject: 30,
  numberofyear: 2,
};

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url='../../public/img/hero/background.png' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)',  opacity: 0.5,}}/>
          <img src='img/hero/background.png'/>
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hola, te presento</h3>
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
                <span className="win">
                  <img src="img/svg/award.svg" alt="" className="svg" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      {/* <Counter end={homeData.numberofyear} /> */}
                    </h3>
                    <span className="item_name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      {/* <Counter end={homeData.numberOfProject} /> */}
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Projects
                      <br />
                      Completed
                    </span>
                  </div>
                </div>
                <span className="circle anim_circle">
                  <img src="img/hero/circle.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
