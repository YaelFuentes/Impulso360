import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";
const Testimonials = () => {
  useEffect(() => {
    dataImage();
    /* imgToSVG(); */
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Testimonios</span>
            <h3>¿Que dicen nuestros clientes?</h3>
            <p>
              Descubre lo que nuestros clientes satisfechos dicen sobre nuestra excelencia
            </p>
          </div>
          <div
            className="testimonials_list wow fadeInUp"
            data-wow-duration="1s"
          >
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="textTestimonial">
                    Cumplieron con todos los plazos informados y fueron muy predispuestos con nuestra organización.
                    Transformaron nuestra presencia digital y nos han ayudado a crecer exponencialmente.
                    Tienen un equipo muy profesional y dedicado, los recomiendo 100%
                  </p>
                  <div className="details">
                    <div className="short">
                      <h3 className="mt-6">Ignacio Roldán</h3>
                      <span>Casa Coraje</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="textTestimonial">
                    Desde el momento en que contratamos a esta empresa para digitalizar nuestro negocio, hemos visto buenos resultados.
                    Su capacidad para diseñar una página web atractiva y funcional, junto con sus estrategias de marketing personalizada,
                    han sido fundamentales para nuestro éxito en línea.
                  </p>
                  <div className="details">
                    <div className="short">
                      <h3 className="xs:mt-5">Daniel Araya</h3>
                      <span>Black Group</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="textTestimonial">
                    Esta empresa ha superado nuestras expectativas en todos los aspectos.
                    Su equipo de diseñadores gráficos ha creado una identidad visual atractiva para nuestra marca.
                    Estamos muy conformes con los resultados y no dudaremos en recomendarlos a otras empresas.
                  </p>
                  <div className="details">
                    <div className="short">
                      <h3 className="md:mt-5">Carolina Riquelme</h3>
                      <span>Zendit</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="textTestimonial">
                    Hemos trabajado con varias agencias de marketing en el pasado,
                    pero ninguna se compara con el nivel de profesionalismo y habilidad que hemos experimentado con ellos.
                    Su enfoque nos ha permitido alcanzar resultados extraordinarios. Los recomendaré a todos mis contactos.
                  </p>
                  <div className="details">
                    <div className="short">
                      <h3 className="lg:mt-5">Rodrigo Sandoval</h3>
                      <span>Welivery</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
            <div
              className="shape moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
