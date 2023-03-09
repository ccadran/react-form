import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormTemplate = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_iveepgi",
                "template_dm9faj8",
                form.current,
                "6IEn1_TLChl4OROcq"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" required autoComplete="off" />
            <label>Email</label>
            <input type="email" name="email" required autoComplete="off" />
            <label>Message</label>
            <textarea name="message" required autoComplete="off" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default FormTemplate;
