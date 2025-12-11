import React, { useState } from "react";
import { Title2 } from "../../utils/Title2/Title2";
import emailjs from "@emailjs/browser";
import "./index.css";
import { TailSpin } from "react-loader-spinner";

import Form, {
  Input,
  FormButton,
  FormThemeProvider,
  themeOverrides,
} from "react-form-component";
import { useLanguage } from "../../utils/contexts/languageContext";
import { texts } from "../../utils/texts";

export const Contacts = () => {
  const { language } = useLanguage();

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

  const formTheme: themeOverrides = {
    colors: {
      accent: "#007bff",
      inputText: "#6c757d",
      success: "#28a745",
      error: "#dc3545",
      label: "#212529",
      inputBg: "#ffffff",
    },
    sizes: {
      inputHeight: 70,
      inputGutterBottom: 20,
    },
  };

  return (
    <div id="contacts">
      <div className="containerWrapper">
        <div className="parent">
          <Title2
            centered
            title={texts.links.contacts[language.value]}
          ></Title2>

          <div className="subtitle">
            {texts.contactsSubtitle[language.value]}
          </div>
          <div className="form">
            <FormThemeProvider theme={formTheme}>
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
                  label={texts.form.name[language.value]}
                  type="text"
                  placeholder={texts.form.namePlaceholder[language.value]}
                  mandatory
                  large
                />
                <Input
                  name="phone"
                  label={texts.form.phone[language.value]}
                  type="tel"
                  placeholder="+373 79000000"
                  mandatory
                  large
                />
                <Input
                  name="from_email"
                  label={texts.form.mail[language.value]}
                  type="email"
                  placeholder={texts.form.mailPlaceholder[language.value]}
                  mandatory
                  large
                />
                <Input
                  name="subject"
                  label={texts.form.subject[language.value]}
                  type="text"
                  placeholder={texts.form.subjectPlaceholder[language.value]}
                  mandatory
                  large
                />
                <Input
                  name="message"
                  label={texts.form.message[language.value]}
                  type="text"
                  placeholder={texts.form.messagePlaceholder[language.value]}
                  mandatory
                  large
                  className="textArea"
                />

                <FormButton loading={loading} reset onClick={submitForm}>
                  {loading && <TailSpin color="#000" height={20} width={20} />}
                  {texts.btnText.submit[language.value]}
                </FormButton>
              </Form>
            </FormThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};
