import emailjs from "@emailjs/browser";

export const sendEmail = (form: any) => {
    // e.preventDefault();
    console.log('sendEmail',form)
    emailjs
    .sendForm('service_flbwksq', 'template_7mlzlti', form, {
      publicKey: 'eAWrsQr4bHpp3-18I',
    })
      // .sendForm(
      //   "service_skewxc4",
      //   "template_ihttjte",
      //   form.current,
        
      // )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error);
        }
      );
  };