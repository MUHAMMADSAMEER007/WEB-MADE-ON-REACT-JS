import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'


const Contact=()=>{

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7e9b9cc1-c051-4ddf-908f-c4c196be529b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return(
        <div className='Contact'>
            <div className='Contact-col'>
                <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find out our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@edusity.com</li>
                    <li><img src={phone_icon} alt="" />03144722987</li>
                    <li><img src={location_icon} alt="" />Raiwind road 37km</li>
                </ul>
            </div>
                <div className='Contact-col'>
                    <form onSubmit={onSubmit}>
                        <label>Your Name</label>
                        <input type="text" name="name" placeholder="Enter your name" required/>
                        <label>Your Phone Number</label>
                        <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
                        <label>Write your message here</label>
                        <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
                        <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                    </form>

                    <span>
                        {result}
                    </span>

                </div>
        </div>  
    );
}

export default Contact