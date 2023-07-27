import { Player } from '@lottiefiles/react-lottie-player';

const aboutData = {
  designation: "Impulso360",
  title: "Un grupo apasionados por el mundo digital",
  text: [
    "Somos un grupo de apasionados por el mundo digital conformado por un equipo de profesionales altamente calificados. Nos hemos unido con el objetivo de brindar soluciones integrales",
    "Ayudamos a pequeñas y medianas empresas a alcanzar sus objetivos comerciales y aumentar su precensia en linea. Contamos con expertos en marketing, publicidad digital, diseño web, SEO, y analisis de datos.",
  ],
  skillIcons: [
    { name: "joomla", icon: "img/svg/joomla.svg" },
    { name: "wp", icon: "img/svg/wp.svg" },
    { name: "drupal", icon: "img/svg/drupal.svg" },
    { name: "laravel", icon: "img/svg/laravel.svg" },
  ],
};

const About = () => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                {/* <img src="img/thumbs/64-49.jpg" alt="" /> */}
                {/* <div className="main" data-img-url="img/about/1.jpg" /> */}
                <Player
                  autoplay
                  loop
                  priority
                  sizes='(max-width:768px) 100vw,
              (max-width:1200px) 50vm, 50vw'
                  src="https://assets5.lottiefiles.com/packages/lf20_su8vw1n6.json"
                  className='w-full h-auto'
                />
                <div className="extra_image">
                  <div className="image_inner">
                    {/* <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main_extra"
                        data-img-url="img/about/2.jpg"
                      /> */}
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    {/* <span
                        className={`icon_${i + 1} wow fadeIn`}
                        data-wow-duration="1s"
                        data-wow-delay={`0.${i * 2}s`}
                      >
                        <img className="svg" src={skill.icon} alt="" />
                      </span> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`Somos `} {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              {/* <div className="devman_tm_button">
                  <a className="anchor" href="#portfolio">
                    View Portfolio
                  </a>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
