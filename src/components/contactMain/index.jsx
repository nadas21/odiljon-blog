import "./contact.css";
import { RiMessage3Fill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { useState } from "react";

export const ContactMain = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const addData = (e) => {
    e.preventDefault();
    fetch(import.meta.env.VITE_APP_BASE_URL + "/create_contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage.getItem("admin")
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.message === "created contact") {
          location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="contact-main">
      <div className="container">
        <div className="contact-main-inner">
          <div className="contact-main-left">
            <div className="contact-main-mini">
              <p className="contact-main-mini-p">bog'lanish</p>
              <h3 className="contact-main-title">Biz bilan bo'glaning</h3>
            </div>
            <p className="contact-left-p">
              Bizga xatolar va takliflar bo'yicha va imloviy xatolar topsangiz
              biz bilan bog'lanishingiz mumkin murojatingizdan xursand bo'lamiz.
            </p>
            <div className="contact-wrapper">
              <div className="contact-main-card contact-main-card-extra">
                <IoCall className="contact-icon" />
                <a
                  target="_blank"
                  href="tel:+998904565025"
                  className="contact-main-card-box"
                >
                  <h4 className="contact-main-card-title">(93)829-14-16</h4>
                  <p className="contact-main-card-text">Telefon raqam</p>
                </a>
              </div>
              <div className="contact-main-card contact-main-card-extra">
                <RiMessage3Fill className="contact-icon" />
                <a
                  href="mailto:muhammadalishuhratjonov50@gmail.com"
                  className="contact-main-card-box"
                >
                  <h4 className="contact-main-card-title">aapn4535@gmail.com</h4>
                  <p className="contact-main-card-text">Email</p>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-main-right">
            <form className="contact-form">
              <fieldset>
                <label htmlFor="name">Ism</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Sizning ismimgiz..."
                  autoComplete="on"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Sizning emailingiz..."
                  autoComplete="on"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="subject">Mavzu</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Mavzu matni..."
                  autoComplete="on"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="message">Xabar</label>
                <textarea
                  placeholder="Sizning xabaringiz..."
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </fieldset>
              <button className="contact-btn" onClick={addData}>
                Xabar Yuborish
              </button>
            </form>
          </div>
        </div>
      <div>
      </div>
      </div>
    </section>
  );
};
