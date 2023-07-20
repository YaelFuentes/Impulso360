import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Plan Impulso 360",
    img: "https://lottie.host/b438b32d-81d8-46e1-bedf-e13dd8536eee/PRYgB5NhQq.json",
    icon: "img/svg/cpu.svg",
    backgroundImage: "img/svg/fondoImg7.jpg",
    description: [
      "En un entorno cada vez más competitivo y digitalizado, entendemos la importancia de destacar y mantenerse al día con las últimas tendencias tecnológicas. Es por eso que hemos creado el plan Impulso 360, diseñado específicamente para ayudar a empresas como la tuya a alcanzar su máximo potencial en el mundo digital.",
      "- Identidad de marca e Imagen Corporativa",
      "- Estrategia Comercial",
      "- Google Ads",
      "- Meta Ads (Facebook + Instagram)",
      "- Creación de Redes Sociales:",
      "  a. Instagram",
      "  b. Facebook",
      "  c. Tik Tok",
      "- Servicio de Community Manager",
      "- Grilla de Contenidos + piezas gráficas (Post e historias)",
      "- Análisis de Métricas",
      "- Creación de Página Web/E-Commerce",
      "- Posicionamiento SEO",
      "- E-mail Marketing"
    ],
  },
  {
    name: "Plan Premium",
    img: "https://lottie.host/b9e1d046-950c-43ef-abc6-f04a45213eac/ODjVndPFqv.json",
    icon: "img/svg/phone.svg",
    backgroundImage: "img/svg/fondoImg6.jpg",
    description: [
      "Con Plan Premium, ofrecemos una selección cuidadosamente diseñada de servicios digitales que se adaptan a las necesidades específicas de tu empresa. Si bien este plan puede ofrecer un poco menos en comparación con nuestro plan Impulso 360, sigue siendo una opción poderosa para impulsar tu presencia en línea y alcanzar tus objetivos comerciales",
      "- Google Ads",
      "- Meta Ads (Facebook + Instagram)",
      "- Creación de Redes Sociales: ",
      "a. Instagram",
      "b. Facebook",
      "c. Tik Tok",
      "- Servicio de Community Manager",
      "- Grilla de Contenidos + piezas gráficas (Post e historias)"
    ],
  },
  {
    name: "Diseño Gráfico",
    img: "https://lottie.host/3d252692-c0a0-44e0-96a4-87d4a267568f/zu5EATXbvo.json",
    icon: "img/svg/web.svg",
    backgroundImage: "img/svg/fondoImg5.jpg",
    description: [
      "Con el plan Diseño Gráfico, nos enfocamos en brindarte servicios especializados en marketing y comunicación visual para que tu empresa destaque en el mercado. A través de diseños profesionales y creativos, te ayudaremos a transmitir tu mensaje de manera efectiva y atraer a tu audiencia objetivo.",
      "- Identidad de marca e Imagen Corporativa",
      "- Diseño u optimización de logo",
      "- Brochure Comercial",
      "- Grilla de Contenidos + piezas gráficas (Post e historias)"
    ],
  },
  {
    name: "Plan Personalizado",
    backgroundImage: 'img/svg/fondoImg2.jpg',
    icon: "img/svg/star.svg",
    img: "https://lottie.host/34787d6f-9445-445b-b6f7-6a6d16890580/Yc2tjogH9W.json",
    description: [
      "El plan Personalizado está diseñado para adaptarse a las especificidades de tu empresa, abarcando todas las áreas necesarias para impulsar tu presencia en línea y alcanzar tus objetivos comerciales. Nuestro enfoque altamente flexible y personalizado nos permite crear una solución única que se ajuste perfectamente a tus necesidades.",
      "- Plan a medida del cliente",
      "",
    ],
  },
];
const Service = () => {
  const openPopup = (service) => {
    setActiveData(service);
    setOpen(true);
  };
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      {/* <div className="devman_tm_section" id="service">
        <h2 className="text-center pb-8 text-4xl font-bold">
          Servicios que ofrecemos
        </h2>
        <div className="devman_tm_service">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {serviceData.map((service, i) => (
                <div
                  key={i}
                  className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                  data-wow-duration="1s"
                >
                  <div className="list_inner bg-cover bg-center rounded-lg p-4"
                  style={{ backgroundImage: `url(${service.backgroundImage})` }}>
                    <img className="svg" src={service.icon} alt="" />
                    <div className="title font-bold text-xl mb-2">
                      {service.name}
                    </div>
                    <p className="text">
                      {service.description[0].substring(0, 138)}.
                    </p>
                    <button
                      className=""
                      onClick={() => openPopup(service)}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="shape moving_effect" data-direction="y" data-reverse="yes" />
        </div>
      </div> */}
      <ServicePopup open={open} close={() => setOpen(false)} data={activeData} />
      <h2 className="text-center pb-8 text-4xl font-bold">
        Servicios que ofrecemos
      </h2>
      <div className="devman_tm_service" id="service">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:mr-24 lg:ml-24 text-center">
          {serviceData.map((service, i) => (
            <>
              <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a onClick={() => openPopup(service)}>
                  <img class="rounded-lg w-full h-96 object-cover" src={service.backgroundImage} alt="image description" />
                </a>
                <figcaption class="absolute px-4 text-lg text-gray-800 bottom-6 text-center font-medium bg-black bg-opacity-40 backdrop-blur-lg p-2 rounded-lg shadow-lg">
                  <p>{service.name}</p>
                </figcaption>
              </figure>
            </>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
