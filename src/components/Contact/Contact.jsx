import React from "react";
import NavBar from "../NavBar/NavBar"
import styleContact from "./StyleContact.module.scss"
import emailjs from 'emailjs-com';
import swal from "sweetalert";
import "./Styleform.scss"

export default function Contact(){

  function enviarEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_3ns59e4','template_n6zhtv4',e.target,'03J_rYdTl2jWwpHCD').then(res=>{
        swal({
            title: "Mensaje a Sergio",
            text: "Su mensaje se envió correctamente",
            icon: "success",
            button: "ok",
        })
    })
  }
  
    return(
        <div>
            <div className={styleContact.back}>
            <div className={styleContact.navbar}>
                <NavBar/>
            </div>
            <div className={styleContact.divHome}>
            <div className={styleContact.container}>
            <div >
                <div >
                    <h1>Contact</h1>
                    <hr/>
                    <form onSubmit={enviarEmail}>
                        <div className="form-row">
                            <div className="form-group ">
                                <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Insert your Name"/>
                            </div>
                            <div className="form-group ">
                                <input type="text" className="form-control" id="email" name="email" placeholder="Insert your e-mail"/>
                            </div>
                        </div>
                        <div className="form-group mensaje">
                            <textarea type="text" className="form-control" id="mensaje" name="mensaje" placeholder="Insert your menssage"
                            rows="6"></textarea>
                        </div>
                        <button 
                        type="submit" 
                        className="bottonsend" 
                                >Send</button>
                    </form>
                </div>
            </div>
</div>
            

            </div>
        
            </div>
        </div>

    )
    }
