import { ContactHero } from "../../components/contactHero";
import { ContactMain } from "../../components/contactMain";
import { Layouts } from "../../components/layouts";

export const Contact = () => {
  return (
    <Layouts>
      <ContactHero />
      <ContactMain />
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6407.515387153591!2d72.75615255915734!3d40.719239460553254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bd035809540c1f%3A0x5ca57f9958fb8c74!2sRamazon%20qori%20jome%20masjidi!5e0!3m2!1sru!2s!4v1708948467467!5m2!1sru!2s"
          width="600"
          height="450"
          style={{border:"0px", borderRadius: "16px", width: "100%", height: "50vh"}}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Layouts>
  );
};
