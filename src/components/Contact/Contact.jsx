import React from "react";
import swal from "sweetalert";
import emailjs from "emailjs-com";
import Button from "../Button/Button";
import styleContact from "./StyleContact.module.scss";
import "./Contact.scss";

export default function Contact() {
  function enviarEmail(e) {
    e.preventDefault();
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!e.target.name.value) {
      swal({
        title: "Error",
        text: "Debe escibir su nombre",
        icon: "error",
        button: "ok",
      });
      return;
    }
    if (e.target.name.value.length < 4) {
      swal({
        title: "Error",
        text: "Su nombre es muy corto",
        icon: "error",
        button: "ok",
      });
      return;
    }
    if (!e.target.email.value) {
      swal({
        title: "Error",
        text: "Debe escribir un email",
        icon: "error",
        button: "ok",
      });
      return;
    }
    if (!emailRegex.test(e.target.email.value)) {
      swal({
        title: "Error",
        text: "Email invalido",
        icon: "error",
        button: "ok",
      });
      return;
    }
    if (e.target.message.value.length < 50) {
      swal({
        title: "Error",
        text: "Su mensaje es muy corto debe superar los 50 caracteres",
        icon: "error",
        button: "ok",
      });
      return;
    }
    emailjs
      .sendForm(
        "service_a8whzxg",
        "template_6lbiy7d",
        e.target,
        "zJ0448SnBXmFVCo12"
      )
      .then((res) => {
        swal({
          title: "Mensaje a Sergio",
          text: "Su mensaje se envió correctamente",
          icon: "success",
          button: "ok",
        });
      });
  }

  return (
    <div className={styleContact.all}>
      <div className={styleContact.divHome}>
        <div className={styleContact.container}>
          <h1 className={styleContact.title}>Contácteme:</h1>
          <form className={styleContact.formControl} onSubmit={enviarEmail}>
            <div className={styleContact.formgroup}>
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Su nombre"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Su e-mail"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Mensaje"
                className="form-control"
                name="message"
                rows="10"
              ></textarea>
            </div>
            <div>
              <Button title={"Enviar"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
