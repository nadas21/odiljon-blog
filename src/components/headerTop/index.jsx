import "./headertop.css";
import { MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoShareSocial } from "react-icons/io5";
import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

export const HeaderTop = () => {

  const [modal, setModal] = useState(false)

  const handleModal = () => {
   setModal(item => !item)
  }

  return (
    <div className="header-top">
      <div className="container">
            {
              modal ?
              <FaRegWindowClose className="hamburger" onClick={handleModal}/>
              : 
              <IoShareSocial className="hamburger hamburger-next" onClick={handleModal}/>
            }
        <div className={modal ? "header-top-inner" : "header-top-inner-extra"}>
        <FaRegWindowClose className="hamburger" onClick={handleModal}/>
          <div className="header-top-left">
            <a
              className="header-top-link"
              target="_blank"
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193366.83426850228!2d72.68407371872085!3d40.776169768996105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bd04d79c190267%3A0x1c454448e0de0851!2z0JrRg9GA0LPQsNC90YLQtdC_0LjQvdGB0LrQuNC5INGA0LDQudC-0L0sINCQ0L3QtNC40LbQsNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1708240516081!5m2!1sru!2s"
            >
              <MdEmail className="header-top-icon"/>
              <span>
              aapn4535@gmail.com
              </span>
            </a>
            <a
              className="header-top-link header-top-link-extra"
              target="_blank"
              href="https://maps.app.goo.gl/Tg9oTzA6Bkb1SxzYA"
            >
              <FaMap className="header-top-icon" />
              <span>
              Andijon. sh
              </span>
            </a>
          </div>
          <div className="header-top-right">
            <div className="header-top-auth">
              <FaRegUserCircle style={{ fontSize: "20px" }} />
              <NavLink to={"/login"} className="header-top-lgoin">
                Log in
              </NavLink>
              <NavLink to={"/register"} className="header-top-lgoin">
                Register
              </NavLink>
            </div>
            <ul className="header-top-list">
              <li className="header-top-item">
                <a
                  target="_blank"
                  href="https://www.facebook.com/share/35pb6cuFhWiT6kGs/?mibextid=qi2Omg"
                  className="header-top-item-link"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="header-top-item">
                <a
                  target="_blank"
                  href="https://www.instagram.com/odiljonon2108?igsh=MXF0YWM3ZGsweWltdw=="
                  className="header-top-item-link"
                >
                  <BsInstagram />
                </a>
              </li>
              <li className="header-top-item">
                <a
                  target="_blank"
                  href="https://t.me/nadasuzb"
                  className="header-top-item-link"
                >
                  <FaTelegramPlane />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
