import React, {useState} from "react";
import "./componentStyles/ContactMe.css";
import Tooltip from "./Tooltip";
import emailIcon from "../assets/ui_icons/email.svg";
import resumeIcon from "../assets/ui_icons/document.svg";
import locationIcon from "../assets/ui_icons/location.svg";
import copyIcon from "../assets/ui_icons/copy_icon.svg";

// Firebase
import { db } from "../config/firebase.js"
import { collection, addDoc } from "firebase/firestore";

function ContactMe(){
    const email = "allanjoe2020@gmail.com";

    const [setShowCopiedtoClipboard, setShowCopied] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showError, setShowError] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChanged = (evnt) => {
        setFormData(
            {
                ...formData,
                [evnt.target.name]: evnt.target.value
            }
        );
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const docRef = await addDoc(collection(db, 'messages'), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timestamp: Date.now(),
            });

            console.log("Added to Firebase Database with DocId: ",docRef)
            setFormData(
                {
                    name: "",
                    email: "",
                    message: "",
                }
            );
            setShowSuccessMessage(true);
            setTimeout(() => {setShowSuccessMessage(false);}, 2000);
        } catch (error) {
            setShowError(true);
            setTimeout(() => {setShowError(false);}, 2000);
            console.error("Error Submitting Form: ", error);
        }
    }

    const copyEmail = async () => {
        try{
            await navigator.clipboard.writeText(email);
            setShowCopied(true);
            setTimeout(() => {setShowCopied(false)}, 2000)
        } catch(error) {
            console.error("Copy failed: ", error);
        }
    }


    return(
        <div className="contact-container">
            <h1>Contact Me!</h1>

            <Tooltip text="Copied to Clipboard!" show={setShowCopiedtoClipboard} />
            <Tooltip text="Message Sent Successfully!"  show={showSuccessMessage} />
            <Tooltip text="Sorry an error occurred while sending the Message!" show={showError} />


            <div className="master-contact-container">
                <div className="contact-section-container">
                    <div className="contact-section">
                        <div className="contact-icon">
                            <img src={emailIcon}/>
                        </div>

                        <div className="contact-details">
                            <h1>Email: </h1>
                            <h2>{email}</h2>
                        </div>

                        <div className="copy-icon" onClick={copyEmail}>
                            <img src={copyIcon} />
                        </div>

                    </div>


                    <div className="contact-section">
                        <div className="contact-icon">
                            <img src={locationIcon}/>
                        </div>


                        <div className="contact-details">
                            <h1>Location: </h1>
                            <h2>Kochi, Kerala, India</h2>
                        </div>

                    </div>
                    <div className="contact-section">
                        <div className="contact-icon">
                            <img src={resumeIcon}/>
                        </div>


                        <div className="contact-details">
                            <h1>View My Resume: </h1>
                            <a href={import.meta.env.VITE_APP_G_DRIVE_RESUME_LINK} target="_blank" rel="noopener noreferrer" className="resume_link">Click Here !</a>
                        </div>

                    </div>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>

                        <div className="form-item">
                            <label form="name">Name: </label>
                            <input className="contact-name" name="name" id="contact-name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChanged} required/>
                        </div>


                        <div className="form-item">
                            <label form="contact-email">Email</label>
                            <input className="contact-email" name="email" id="contact-email" type="email" placeholder="Your email" value={formData.email} onChange={handleChanged} required/>
                        </div>

                        <div className="form-item">
                            <label form="contact-message">Message</label>
                            <textarea className="contact-message" name="message" id="message" rows="4" placeholder="Your message" required value={formData.message} onChange={handleChanged}></textarea>

                        </div>

                        <div className="form-item">
                            <button className="send-btn" type="submit">Send</button>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default ContactMe;