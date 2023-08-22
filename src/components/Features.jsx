const features_list = [
    {
      title: "Análisis e investigación",
      icon: "img/svg/design.svg",
      text: "Vamos a comenzar a armar la estrategia de tu marca a partir de una investigación de mercado. El periodo investigativo dura 7 días",
    },
    {
      title: "Armado de Diseño y Prototipo",
      icon: "img/svg/development.svg",
      text: "Luego de haber investigado, inmediatamente se comienza a trabajar en la idea principal de la estrategia integral. Esto incluye el modelo de mercado, diseño gráfico y redes sociales.",
    },
    {
      title: "Desarrollo de activos digitales",
      icon: "img/svg/landing.svg",
      text: "Luego de nuestra junta y teniendo acordada la identidad visual de tu marca, comenzaremos a plasmarla en tu nuevo sitio web y redes sociales de la mano de nuestros diseñadores y analistas.",
    },
    {
      title: `Lanzamiento oficial de proyecto`,
      icon: "img/svg/landing.svg",
      text: "Cuando se cumplan los 30 días de haber iniciado el proyecto, se realiza el lanzamiento de la estrategia integral en todos los canales digitales establecidos + grilla de contenidos.",
    }
  ];
  const Features = () => {
    return (
      <div className="devman_tm_section">
        <div className="devman_tm_features">
          <div className="container">
            <div className="features_list">
              <div className="text-4xl font-bold items-center justify-center flex flex-col mb-10">
                <h3>
                  Como trabajamos
                </h3>
              </div>
              <ul>
                {features_list.map((feature, i) => (
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={`"0.${i * 2}s"`}
                    key={i}
                  >
                    <div className="list_inner">
                      <div className="short">
                        <div className="title">
                          <span>Paso {`0${i + 1}`}</span>
                          <h3>{feature.title}</h3>
                        </div>
                        <div className="icon">
                          <img className="svg" src={feature.icon} alt="" />
                        </div>
                      </div>
                      <div className="text">
                        <p>{feature.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Features;
  