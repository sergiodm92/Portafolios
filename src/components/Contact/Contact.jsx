import React from "react";
import NavBar from "../NavBar/NavBar"
import styleContact from "./StyleContact.module.scss"


export default function Contact(){
  
    return(
        <div>
            <div className={styleContact.back}>
            <div className={styleContact.navbar}>
                <NavBar/>
            </div>
            <div className={styleContact.divHome}>
            <div className={styleContact.container}>
  <h1 className={styleContact.title}>Contact me</h1>
  <form target="_blank" action="https://formsubmit.co/crgiodm@gmail.com" method="POST">
    <div className={styleContact.formgroup}>
      <div class="form-row">
        <div class="col">
          <input  type="text" name="name" className="form-control" placeholder="Insert your Name" required/>
        </div>
        <div class="col">
          <input type="email" name="email" className="form-control" placeholder="Insert your e-mail "  required/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Writte your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" className="bottonsend">Send</button>
  </form>
</div>
            

            </div>
        
            </div>
        </div>

    )
}



