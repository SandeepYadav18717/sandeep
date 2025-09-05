import { useState } from "react";
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function on(event){
    setName(event.target.value)
 
  }
   function email(event){
    setEmail(event.target.value)
 
  }
   function Phone(event){
    setPhone(event.target.value)
 
  }
    

  return (
    <>
    <div id="heading">Get in <span style={{color:"gold"}}>Touch</span> With Us
</div>
<br />
<div id="value">
      <input
        type="text"
        onChange={on}
        
        placeholder="Enter your name"
        className="input-box"
      /><br />
      {name}
      
      <br />
      
      <input
      className="input-box"
        type="email"
        onChange={email}
        placeholder="Enter your Email"
      /><br />
     Email is: {Email}
<br />
       <input
       className="input-box"
        type="Phone"
        onChange={Phone}
        
        placeholder="Enter your Phone number"
      />
      <br />
      Mobile No:{phone}
      <br />
    <br />
    
  <button >submit</button>
    </div>
    </>
  );
}


export default Contact;
