import React from "react";
import swal from "sweetalert";
import emailjs from 'emailjs-com';
import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar"
import styleContact from "./StyleContact.module.scss"
import './Contact.scss'

export default function Contact(){

  function enviarEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_a8whzxg','template_6lbiy7d',e.target,'zJ0448SnBXmFVCo12').then(res=>{
        swal({
            title: "Mensaje a Mariana",
            text: "Su mensaje se envió correctamente",
            icon: "success",
            button: "ok",
        })
    })
  }

    return(
      <div className={styleContact.all}>
        <div className={styleContact.navbar}>
          <NavBar/>
        </div>
        <div className={styleContact.divHome}>
          <div className={styleContact.container}>
            <h1 className={styleContact.title}>Contácteme:</h1>
            <form className={styleContact.formControl} onSubmit={enviarEmail}>
              <div className={styleContact.formgroup}>
                <div className="form-row">
                  <div className="col">
                    <input  type="text" name="name" className="form-control" placeholder="Su nombre" required/>
                  </div>
                  <div className="col">
                    <input type="email" name="email" className="form-control" placeholder="Su e-mail"  required/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Mensaje" className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div>
                <Button
                  title={"Enviar"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
