import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_skills">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Problemas de digitalizacion</span>
            <h3>Principales problemas de las marcas</h3>
            <p>
              Estos son los principales problemas que presentan las marcas a la hora de hablar de digitalizacion
            </p>
          </div>
          <div className="skills_wrapper">
            <div className="left">
              <div className="dodo_progress">
                <div
                  className="skillsInner___ progress_inner"
                  data-value={90}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">Falta de estrategias</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={95}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">Ausencia de redes sociales</span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={98}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">No poseen identidad visual</span>
                    <span className="number">98%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="dodo_progress">
                <div
                  className="skillsInner___ progress_inner"
                  data-value={92}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">Poca Planificacion</span>
                    <span className="number">92%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={90}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">No poseen paginas web</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={96}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">Tienen poco alcance</span>
                    <span className="number">96%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
