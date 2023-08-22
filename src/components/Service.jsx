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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  const [openIndex, setOpenIndex] = useState(null); // Estado para controlar la tarjeta abierta

  const openPopup = (serviceIndex) => {
    setOpenIndex(serviceIndex);
  };

  const closePopup = () => {
    setOpenIndex(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-center pb-8 text-4xl font-bold">
        Servicios que ofrecemos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-20">
        <div className="w-full h-full p-6 flex justify-center items-center">
          <div className="max-w-lg mx-auto">
            <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg h-auto w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p></p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="w-full">
          <div id="accordion-open" data-accordion="open" className="m-6">
            {serviceData.map((service, i) => (
              <BasicAccordion key={i} title={service.name} description={service.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;

