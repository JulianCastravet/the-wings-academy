import React, { useState } from "react";
import { Title2 } from "../../utils/Title2/Title2";
import emailjs from "@emailjs/browser";
import "./index.css";
import { TailSpin } from "react-loader-spinner";

import Form, { Input, FormButton } from "react-form-component";

export const Contacts = ({ language }: any) => {
  const romanian = language.value === "ro";
  const russian = language.value === "ru";
  const english = language.value === "eng";

  const [loading, setLoading] = useState(false);

  let serviceID =
    process.env.NODE_ENV === "production" ? "service_lomxsqs" : "";
  let templateID =
    process.env.NODE_ENV === "production" ? "template_litz9le" : "";
  let public_key = process.env.NODE_ENV === "production" ? "" : "";

  const submitForm = async (fields: any) => {
    setLoading(true);
    try {
      emailjs
        .send(
          serviceID,
          templateID,
          {
            from_name: fields.from_name,
            to_name: "The Wings Academy",
            from_email: fields.from_email,
            phone: fields.phone,
            to_email: "to_email",
            subject: fields.subject,
            message: fields.message,
          },
          public_key
        )
        .then(() => {
          setLoading(false);
          alert("Your form has been submited.");
        });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  const setNameLabel = () => {
    return romanian
      ? "Nume / Prenume:"
      : english
      ? "Name / Surname:"
      : "Имя / Фамилия:";
  };
  const setNamePlaceholder = () => {
    return romanian ? "Ion Rusu" : english ? "John Doe" : "Иван Иванов";
  };
  const setPhoneLabel = () => {
    return romanian ? "Telefon:" : english ? "Phone No.:" : "Телефон:";
  };
  const setMailLabel = () => {
    return romanian
      ? "Poșta electronică:"
      : english
      ? "E-mail:"
      : "Электронная почта:";
  };
  const setMailPlaceholder = () => {
    return romanian
      ? "ion.rusu@gmail.com"
      : english
      ? "john.doe@gmail.com"
      : "иван.иванов@mail.ru";
  };
  const setSubjectlabel = () => {
    return romanian ? "Subiect:" : english ? "Subject:" : "Тема:";
  };
  const setSubjectPlaceholder = () => {
    return romanian
      ? "Start-Up Maraton"
      : english
      ? "Start-Up Marathon"
      : "Стартап Маратон";
  };
  const setMessagePlaceholder = () => {
    return romanian ? "Mesaj..." : english ? "Message..." : "Сообщение";
  };

  const setButtonText = () => {
    return romanian ? "Trimite" : english ? "Send" : "Отправить";
  };

  return (
    <div id="contacts">
      <div className="containerWrapper">
        <div className="parent">
          {romanian && <Title2 centered title="Contactează-ne"></Title2>}
          {english && <Title2 centered title="Contact Us"></Title2>}
          {russian && <Title2 centered title="Свяжитесь с Нами"></Title2>}

          <div className="subtitle">
            {romanian &&
              "Doriți să aflați mai multe despre The Wings Academy și cum vă putem ajuta să vă îndepliniți visul de a deveni însoțitor de bord? Completați formularul de mai jos și vă vom contacta în cel mai scurt timp posibil. Suntem nerăbdători să vă cunoaștem și să vă ghidăm în fiecare pas al procesului dumneavoastră de pregătire. Așteptăm cu nerăbdare să vă auzim!"}
            {english &&
              "Would you like to learn more about The Wings Academy and how we can help you fulfill your dream of becoming a flight attendant? Please fill out the form below, and we will contact you as soon as possible. We are eager to meet you and guide you through every step of your training process. We look forward to hearing from you!"}
            {russian &&
              "Хотели бы вы узнать больше о The Wings Academy и о том, как мы можем помочь вам осуществить вашу мечту стать бортпроводником? Пожалуйста, заполните форму ниже, и мы свяжемся с вами в кратчайшие сроки. Мы с нетерпением ждем встречи с вами и готовы провести вас через каждый шаг вашего обучения. Мы с нетерпением ждем вашего обращения!"}
          </div>
          <div className="form">
            <Form
              allMandatory
              fields={[
                "from_name",
                "phone",
                "from_email",
                "subject",
                "message",
              ]}
              className="realForm"
            >
              <Input
                name="from_name"
                label={setNameLabel()}
                type="text"
                placeholder={setNamePlaceholder()}
                mandatory
                large
              />
              <Input
                name="phone"
                label={setPhoneLabel()}
                type="tel"
                placeholder="+373 79000000"
                mandatory
                large
              />
              <Input
                name="from_email"
                label={setMailLabel()}
                type="email"
                placeholder={setMailPlaceholder()}
                mandatory
                large
              />
              <Input
                name="subject"
                label={setSubjectlabel()}
                type="text"
                placeholder={setSubjectPlaceholder()}
                mandatory
                large
              />
              <Input
                name="message"
                label={russian ? "Текст:" : "Text:"}
                type="text"
                placeholder={setMessagePlaceholder()}
                mandatory
                large
                className="textArea"
              />

              <FormButton loading={loading} reset onClick={submitForm}>
                {loading && <TailSpin color="#000" height={20} width={20} />}
                {setButtonText()}
              </FormButton>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
