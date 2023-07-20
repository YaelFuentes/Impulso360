import Accordion from "./Accordion";

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
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
