export const environment = {
  emailJs: {
    serviceID: process.env.REACT_APP_EMAIL_JS_SERVICE_ID || "", 
    templateID: process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID || "",
    publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY || "",
  },
};