import React, { FC, useState } from "react";
import { Btn } from "./Btn";

export const Form: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="contact-input"
        type="text"
        name="name"
        placeholder="Your name"
      />
      <input
        className="contact-input"
        type="email"
        name="email"
        placeholder="Your email"
      />
      <input
        className="contact-input"
        type="text"
        name="subject"
        placeholder="Subject"
      />
      <textarea
        className="contact-textarea"
        name="message"
        id="message"
        cols={30}
        rows={10}
        placeholder="Message"
      ></textarea>

      <Btn className="btn-contact">Send</Btn>
    </form>
  );
};
