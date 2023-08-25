import emailjs from "emailjs-com";
import { useState } from "react";
import FolderList from "./listInfo";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      // https://www.emailjs.com/
      emailjs
        .send(
          "", // service id
          "", // template id
          mailData,
          "" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
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
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <div
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
                    </div>
                    <div className="first">
                      <ul>
                        <li>
                          <input
                            id="name"
                            name="name"
                            onChange={(e) => onChange(e)}
                            value={name}
                            type="text"
                            placeholder="Nombre"
                          />
                        </li>
                        <li>
                          <input
                            id="email"
                            type="text"
                            name="email"
                            onChange={(e) => onChange(e)}
                            value={email}
                            placeholder="Email"
                          />
                        </li>
                        <li>
                          <input
                            id="phone"
                            type="phone"
                            name="phone"
                            onChange={(e) => onChange(e)}
                            value={email}
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
                        onChange={(e) => onChange(e)}
                        value={message}
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
