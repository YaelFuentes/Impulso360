import emailjs from "emailjs-com";
import { useState } from "react";
import FolderList from "./listInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Correo enviado exitosamente');
        // Haz algo aquí después de enviar el correo exitosamente
      } else {
        console.error('Error al enviar el correo');
        // Manejo de errores aquí
      }
    } catch (error) {
      console.error('Error:', error);
      // Manejo de errores aquí
    }
  };
  return (
    <div className="devman_tm_section" id="contact">
      <div className="devman_tm_contact">
        <div className="container">
          <div className="contact_inner">
            <div className="devman_tm_main_title" data-text-align="left">
              <span>Completa <u>HOY</u> tus datos. Tienes una asesoría y cotización a medida 100% gratuita</span>
              <h3 className="mt-10">Contactanos</h3>
            </div>
            <div className="in">
              <div className="left wow fadeInLeft" data-wow-duration="1s">
                <div className="fields">
                  <form
                    className="contact_form"
                    id="contact_form"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    {/* <div
                      className="returnmessage"
                      data-success="Your message has been received, We will contact you soon."
                    />
                    <div
                      className={error ? "empty_notice" : "returnmessage"}
                      style={{ display: error == null ? "none" : "block" }}
                    >
                      <span>
                        {error
                          ? "Please Fill Required Fields"
                          : "Your message has been received, We will contact you soon."}
                      </span>
                    </div> */}
                    <div className="first">
                      <ul>
                        <li>
                          <input
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={formData.name}
                            type="text"
                            placeholder="Nombre"
                          />
                        </li>
                        <li>
                          <input
                            id="email"
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder="Email"
                          />
                        </li>
                        <li>
                          <input
                            id="phone"
                            type="number"
                            name="phone"
                            onChange={handleChange}
                            value={formData.phone}
                            placeholder="Telefono"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="last">
                      <textarea
                        id="message"
                        placeholder="Mensaje"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                      />
                    </div>
                    <div className="devman_tm_button" data-position="left">
                      <input type="submit" value="Enviar consulta" />
                    </div>
                    {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
                  </form>
                </div>
              </div>
              <FolderList />
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};
export default Contact;
