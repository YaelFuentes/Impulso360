import Accordion from "./Accordion";
import BasicAccordion from "./AccordionService";


const accordionData = [
  {
    title: "¿Que es impulso 360?",
    details: [
      `Somos un grupo de apasionados por el mundo digital conformado por un equipo de profesionales altamente calificados.`,
      <br />,
      `Nos hemos unido con el objetivo de brindar soluciones integrales en el ámbito del marketing digital; y ayudamos a las pequeñas y medianas empresas a alcanzar sus objetivos comerciales y aumentar su presencia en línea. Contamos con expertos en áreas clave como estrategia de marketing, publicidad digital, diseño web, redes sociales, SEO y análisis de datos, entre otros. Creemos en la importancia de entender a fondo su negocio y su público objetivo para poder generar resultados efectivos.`,
    ]
  },
  {
    title: "¿Qué ofrecemos a nuestros clientes?",
    details: [
      `Realizaremos un análisis detallado de tu marca y el mercado actual para comenzar a armar la identidad visual y de su mano, un plan de negocios que sea coherente y funcional según la misma.`,
      <br />,
      `Luego, nuestro equipo de diseñadores y desarrolladores web comenzarán a crear diseños y contenido para tus redes sociales y página web. Además, establecerán como lucirá tu tienda digital, y crearán tu estrategia comercial que te llevará a incrementar tus ingresos`,
    ]
  },
  {
    title: "¿Qué tipos de planes tienen?",
    details: [
      `Contamos con un plan integral de 360°, que desarrolla de principio a fin toda la evolución digital de tu empresa, desde el desarrollo de tu página web, hasta la creación de tus redes sociales, con el contenido correspondiente (piezas gráficas) y la creación de campañas comerciales pagas para llegar a audiencias específicas.`,
      <br />,
      ` También ofrecemos el servicio de Community Manager. Además contamos con planes totalmente a medida, es decir analizamos los requerimientos de cada una de las empresas y nos adaptamos a sus necesidades y presupuestos.`,
    ]
  },
  {
    title: "¿Qué servicios ofrece Impulso 360?",
    details: [
      "Como Agencia de Marketing nos dedicamos a acompañar y digitalizar empresas de forma integral, aumentando su presencia en línea y visibilidad, creando estrategias comerciales y de marketing digital para aumentar sus ventas, y llevando público de calidad interesados en sus productos o servicios. Nuestros principales servicios son: ",
      <br />,
      <br />,
      "Identidad de Marca: Diseño digital (paleta de colores y tipografía), Brochure comercial, Logotipo empresa, Comunicaciones, Valores y personalidad, Marketing.",
      <br />,
      <br />,
      `Estrategia Comercial: Vamos a efectuar un minucioso examen de tu marca y el contexto actual del mercado para iniciar el proceso de construcción de la identidad visual. Simultáneamente, crearemos un plan de negocios que se ajuste perfectamente a esta identidad. Posteriormente, nuestro grupo de profesionales en diseño y desarrollo web se encargará de elaborar diseños y material para tus redes sociales y sitio web. Asimismo, definirán la apariencia de tu tienda en línea y diseñarán una estrategia comercial que impulsará el aumento de tus ingresos.`,
      <br />,
      <br />,
      `Marketing Digital: Creamos, implementamos y optimizamos tus campañas en Google Ads, Instagram, Facebook, YouTube, Tik Tok, LinkedIn. Este procedimiento nos va a permitir alcanzar gran cantidad de público interesado en nuestros productos o servicios, utilizando canales y herramientas digitales estratégicas para lograr los objetivos deseados.`,
      <br />,
      <br />,
      `Creación de Contenido: Desarrollamos grillas de contenido, realizando textos (copys) llamativos, imágenes y videos con los formatos más efectivos como Stories, Reels y más.`,
      <br />,
      <br />,
      `Redes Sociales: Creación y administración de RRSS con el objetivo de generar leads de ventas para el área comercial, a través de una comunicación asertiva y una marcada línea de atención comercial.`,
      <br />,
      <br />,
      `Ventas Comercial: Establecemos un procedimiento profesional, sumado a una línea de atención que lleva a cabo un ejecutivo para lograr cerrar ventas o nuevos negocios dentro de tu empresa.`,
      <br />,
      <br />,
      `Análisis de Métricas: Analizamos las métricas de forma permanente para optimizar las campañas, estudiar nichos de mercado, comprender mejor nuestro público objetivo y llegar a audiencias específicas que comprarán sus productos o contratarán sus servicios.`,
      <br />,
      <br />,
      `Creación y Diseño de Página Web: Desarrollamos páginas web para nuestros clientes, rápidas y totalmente configurables para SEO. Lo hacemos con un equipo de desarrolladores expertos, que trabajan en conjunto con los diseñadores para lograr páginas web profesionales y armónicas.`,
      <br />,
      <br />,
      `Gestión E-Commerce: Diseñamos tu tienda virtual a medida, incorporando todas las funcionalidades necesarias como por ejemplo carrito de compras. Contamos con niveles de seguridad y una interfaz amigable para tus clientes, asegurando un aumento significativo en la venta de tus productos o servicios. Contamos con variados diseños que agilizan el proceso de construcción, y además, incluimos pasarelas de pago, catálogos de productos y numerosas características adicionales.`,
      <br />,
      <br />,
      `Posicionamiento SEO: El posicionamiento SEO es un conjunto de técnicas y estrategias utilizadas para mejorar la visibilidad y el posicionamiento de un sitio web en los resultados orgánicos de los motores de búsqueda, como Google. El objetivo del SEO es conseguir que una página web aparezca en los primeros lugares de los resultados de búsqueda cuando los usuarios realizan consultas relacionadas con el contenido o los productos y servicios ofrecidos en ese sitio. Al alcanzar un mejor posicionamiento en los motores de búsqueda, se aumenta la probabilidad de recibir más tráfico de calidad, es decir, visitantes interesados en lo que ofrece el sitio.
      `,
    ]
  },
  {
    title: "¿Cómo funciona nuestra metodología?",
    details: [
      `Desarrollamos una serie de pasos que nos van a permitir llevar a cabo con éxito nuestro plan:`,
      <br />,
      `1) Análisis e investigación: Vamos a comenzar a armar la estrategia de tu marca a partir de una investigación de mercado. El periodo investigativo dura 7 días hábiles.`,
      `2) Junta para presentación de proyecto: Luego de haber investigado, inmediatamente se comienza a trabajar en la idea principal de la estrategia integral. Esto incluye el modelo de mercado, diseño gráfico y redes sociales.`,
      <br />,
      `3) Armado de herramientas en Línea: Luego de nuestra junta y teniendo acordada la identidad visual de tu marca, comenzaremos a plasmarla en tu nuevo sitio web y redes sociales de la mano de nuestros diseñadores y analistas.`,
      <br />,
      `4) Lanzamiento oficial: Cuando se cumplan los 30 días de haber comenzado el proyecto, se realiza el lanzamiento de la estrategia integral en todos los métodos de comunicación elegidos.`,
      <br />,
      `5) Análisis de Métricas: Mes a mes analizamos los resultados para optimizar rendimiento.
      `,
    ]
  },
  {
    title: "¿Qué ventajas obtendremos al tener presencia en redes sociales y página web?",
    details: [
      `Comprendemos que la cultura empresarial es un factor crucial para el éxito a largo plazo. Nuestro equipo trabajará contigo para comprender tus valores, visión y misión, y te ayudaremos a comunicarlos de manera efectiva a través de tu sitio web, redes sociales y otras plataformas.`,
      <br />,
      `Además, te brindaremos estrategias para motivar y empoderar a tus empleados, lo que resultará en un ambiente de trabajo positivo y productivo.`,
    ]
  },
  {
    title: "¿Cómo aumentarán nuestras ventas y posicionamiento en el mundo digital?",
    details: [
      `Nuestro equipo de marketing digital desarrollará estrategias personalizadas para aumentar tu visibilidad en línea y atraer a tu público objetivo.`,
      <br />,
      `Utilizaremos técnicas avanzadas de SEO (Search Engine Optimization) para posicionar tu sitio web en los primeros lugares de los resultados de búsqueda. Además, nuestras campañas de marketing digital y publicidad en línea te permitirán llegar a clientes potenciales interesados en tus productos o servicios, lo que generará un aumento significativo en tus ventas.`,
    ]
  },

];

const Process = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_process">
        <div className="container">
          <div className="process_inner">
            <div className="left">
              <div className="devman_tm_main_title" data-text-align="left">
                <span>Trabajando para hacer la diferencia</span>
                <h3>Preguntas Frecuentes</h3>
                <p>
                  Encuentra respuestas detalladas a las preguntas más frecuentes sobre nuestros servicios de desarrollo web y sistemas a medida para pequeñas y medianas empresas
                </p>
              </div>
            </div>
            <div className="right">
              <div className="acc_holder">
                {accordionData.map(i => {
                  return (
                    <BasicAccordion key={i} title={i.title} description={i.details} />
                  )
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
