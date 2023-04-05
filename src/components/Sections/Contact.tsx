import React, { Dispatch, FC, SetStateAction } from "react";
import Iframe from "react-iframe";
import { Form } from "../Form";

interface ContactProps {
  isActivePopUP: boolean;
  setIsActivePopUP: Dispatch<SetStateAction<boolean>>;
}

export const Contact: FC<ContactProps> = ({
  isActivePopUP,
  setIsActivePopUP,
}) => {
  return (
    <section id="contact" className="contact">
      <div className="wrapper-map">
        <Iframe
          className="maps"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5117.86472569712!2d28.724730712014424!3d50.247968420082714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c63392f825797%3A0x7998d8332d42a812!2z0YPQuy4g0JrQvtGA0L7Qu9GR0LLQsCwgMTMyLCDQltC40YLQvtC80LjRgCwg0JbQuNGC0L7QvNC40YDRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMTAwMDE!5e0!3m2!1sru!2sua!4v1680385454635!5m2!1sru!2sua"
          width="600"
          height="775"
          styles={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></Iframe>

        <div className="container positio-contact">
          <div className="wrapper-form">
            <h2 className="header-contact">Contact</h2>
            <Form
              isActivePopUP={isActivePopUP}
              setIsActivePopUP={setIsActivePopUP}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
