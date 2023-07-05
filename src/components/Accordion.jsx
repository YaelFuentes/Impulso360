import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "¿Cuánto tiempo lleva desarrollar una página web personalizada?",
    details:
      "El tiempo de desarrollo de una página web personalizada varía según la complejidad del proyecto. Proyectos más simples pueden completarse en unas pocas semanas, mientras que proyectos más complejos pueden llevar de uno a tres meses. El plazo exacto se determina durante las etapas de planificación y diseño, y trabajaremos en estrecha colaboración contigo para cumplir con tus fechas límite.",
  },
  {
    title: "¿Ofrecen servicios de diseño de logotipos y branding?",
    details:
      "Sí, ofrecemos servicios de diseño de logotipos y branding. Nuestro talentoso equipo de diseñadores puede ayudarte a crear una identidad visual sólida y atractiva para tu empresa. Desde el diseño del logotipo hasta la selección de colores y tipografía, nos aseguraremos de que tu marca destaque y transmita la esencia de tu negocio.",
  },
  {
    title: "¿Proporcionan servicios de alojamiento web y registro de dominios?",
    details:
      "Sí, podemos ayudarte con el alojamiento web y el registro de dominios. Podemos recomendar opciones de alojamiento confiables y registradores de dominios para que puedas elegir el más adecuado para tus necesidades. Si ya tienes un proveedor de alojamiento y dominio, también podemos trabajar con ellos.",
  },
  {
    title: "¿Qué es el SEO y cómo pueden ayudarme a mejorar la visibilidad de mi sitio web en los motores de búsqueda?",
    details:
      "El SEO (Search Engine Optimization) se refiere a las prácticas que implementamos para mejorar la visibilidad de tu sitio web en los motores de búsqueda como Google. Esto implica optimizar diversos aspectos, como la estructura del sitio, las palabras clave relevantes, la velocidad de carga, el contenido de calidad y los enlaces externos. Nuestro equipo de expertos en SEO puede implementar estrategias efectivas para aumentar tu clasificación en los motores de búsqueda y atraer más tráfico orgánico a tu sitio web.",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                    height:
                      contentEl.current && contentEl.current.scrollHeight,
                  }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordion;
