import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Plan Impulso 360",
    img: "img/imgService/img1.jpg",
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
    img: "img/imgService/img2.jpg",
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
    img: "img/imgService/img5.jpg",
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
    img: "img/imgService/img4.jpg",
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
      <ServicePopup open={open} close={() => setOpen(false)} data={activeData} />
      <h2 className="text-center pb-8 text-4xl font-bold">
        Servicios que ofrecemos
      </h2>
      <div className="devman_tm_service" id="service">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:mr-24 lg:ml-24 text-center">
          {serviceData.map((service, i) => (
            <>
              <figure className="relative max-w-sm transition-all duration-300 brightness-50 cursor-pointer filter grayscale hover:grayscale-0">
                <a onClick={() => openPopup(service)}>
                  <img className="rounded-lg w-full h-96 object-cover hover:brightness-50" src={service.backgroundImage} alt="image description" />
                </a>
                <figcaption className="absolute px-4 text-xl text-gray-800 bottom-6 text-center font-extrabold bg-black bg-opacity-40 backdrop-blur-lg p-2 rounded-lg shadow-lg">
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
