import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Btn } from "./Btn";

import API from "../service/sendFeetBack";

interface FormProps {
  isActivePopUP: boolean;
  setIsActivePopUP: Dispatch<SetStateAction<boolean>>;
}

export const Form: FC<FormProps> = ({ isActivePopUP, setIsActivePopUP }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [onAlert, setOnAlert] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name.length < 3 ||
      subject.length < 5 ||
      email.length < 1 ||
      message.length < 10
    ) {
      setOnAlert(true);
      return;
    }

    setOnAlert(false);

    API.sendFeetBack(name, email, subject, message);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    setIsActivePopUP(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const nameInput = e.target.name;
    const values = e.target.value;
    switch (nameInput) {
      case "name":
        setName(values);
        break;
      case "email":
        setEmail(values);
        break;
      case "subject":
        setSubject(values);
        break;
      case "message":
        setMessage(values);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        {onAlert && <p className="alert-form">You name - min 3 characters!</p>}
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={handleChange}
        />
        {onAlert && <p className="alert-form">Email - min 1 characters!</p>}

        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={handleChange}
        />
        {onAlert && <p className="alert-form">Subject - min 5 characters!</p>}
        <input
          className="contact-input"
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={handleChange}
        />
        {onAlert && <p className="alert-form">Message - min 10 characters!</p>}
        <textarea
          className="contact-textarea"
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Message"
          value={message}
          onChange={handleChange}
        ></textarea>

        <Btn className="btn-contact">Send</Btn>
      </form>
    </>
  );
};
