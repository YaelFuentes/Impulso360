import React, { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";
import { Accordion } from "flowbite";
import BasicAccordion from "./AccordionService";

const serviceData = [
  {
    name: "Plan Impulso 360",
    img: "img/imgService/img1.jpg",
    icon: "img/svg/cpu.svg",
    backgroundImage: "img/svg/fondoImg7.jpg",
    description: [
      "Impulsa tu negocio al siguiente nivel con nuestro plan integral, una solución completa y poderosa que abarca desde la creación de tu presencia digital hasta la expansión en el mundo online. Deja que nuestro equipo de expertos se encargue de todos los aspectos, desde el diseño de tu página web hasta la estrategia de marketing y optimización de procesos. Tu éxito es nuestra meta, y con Impulso 360, alcanzarás nuevas alturas de crecimiento y visibilidad.",

    ],
    description2: [
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
    ]
  },
  {
    id: 2,
    name: "Plan Platinum",
    img: "img/imgService/img2.jpg",
    icon: "img/svg/phone.svg",
    backgroundImage: "img/svg/fondoImg6.jpg",
    description: [
      "Desata el potencial de tu marca con nuestro Plan Platinum, enfocado en el dominio de las campañas publicitarias, la gestión efectiva de las redes sociales, la creación de contenidos cautivadores y la comunicación asertiva y comercial con la comunidad. Nuestro equipo de profesionales se asegurará de que tu mensaje llegue a la audiencia adecuada, mientras que tu presencia en línea se mantiene activa y atractiva. Con el Plan Platinum, tu marca brillará en el panorama digital.",

    ],
    description2: [
      "- Google Ads",
      "- Meta Ads (Facebook + Instagram)",
      "- Creación de Redes Sociales: ",
      "a. Instagram",
      "b. Facebook",
      "c. Tik Tok",
      "- Servicio de Community Manager",
      "- Grilla de Contenidos + piezas gráficas (Post e historias)"
    ]
  },
  {
    id: 3,
    name: "Contenido RRSS + Identidad de marca",
    img: "img/imgService/img5.jpg",
    icon: "img/svg/web.svg",
    backgroundImage: "img/svg/fondoImg5.jpg",
    description: [
      "Crea una identidad visual única y renovada. Nos encargamos desde la creación u optimización de tu logo hasta la creación de material gráfico creativo, nuestro equipo de diseñadores transformará tu marca en una experiencia visual atractiva para la audiencia. Captura la esencia de tu negocio y comunica con estilo a través de cada diseño corporativo",

    ],
    description2: [
      "- Identidad de marca e Imagen Corporativa",
      "- Diseño u optimización de logo",
      "- Brochure Comercial",
      "- Grilla de Contenidos + piezas gráficas (Post e historias)"
    ]
  },
  {
    id: 4,
    name: "Plan Personalizado",
    backgroundImage: 'img/svg/fondoImg2.jpg',
    icon: "img/svg/star.svg",
    img: "img/imgService/img4.jpg",
    description: [
      "Tu visión es única, y nuestro Plan Personalizado está diseñado para convertirla en realidad. A través de una colaboración cercana y un enfoque personalizado, desarrollaremos una estrategia digital que se adapte perfectamente a las necesidades y objetivos específicos de tu empresa. Convierte tus ideas en acción con un plan diseñado exclusivamente para ti.",

    ],
    description2: [
      " Agenda una reunión On-line y 100% gratuita para conocer tu caso y poder ofrecerte la mejor solución a un precio accesible.",
    ]
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
              <figure className="relative max-w-sm transition-all duration-300 brightness-50 cursor-pointer">
                <a onClick={() => openPopup(service)}>
                  <img className="rounded-lg w-full h-96 object-cover hover:brightness-50" src={service.backgroundImage} alt="image description" />
                </a>
                <figcaption className="absolute px-4 text-xl text-gray-200 bottom-6 text-center font-extrabold bg-black bg-opacity-40 backdrop-blur-lg p-2 rounded-lg shadow-lg">
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

