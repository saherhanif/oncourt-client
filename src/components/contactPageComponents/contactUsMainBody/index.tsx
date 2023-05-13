import React, { useState } from "react";
import "./mainContactBody.scss";
import StyledLine from "../../StyledLine";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function ContactUsMainBody() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const fetchContactBody = async (data: FormData) => {

    const response = await fetch(process.env.REACT_APP_URL + "/mail" || "", {
      body: JSON.stringify(data),
      method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
    
    });


  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    fetchContactBody(formData)
    console.log(formData);
  };

  return (
    <div className="contactUsContainer">
      <div className="contactTitleAndLine">
        <h1>
          {" "}
          צור <span>קשר</span>
        </h1>
        <StyledLine />
      </div>
      <div className="fieldsAndInfoContainer">
        <div className="fields">
          <input
            type="text"
            name="name"
            placeholder="שם"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            placeholder="מייל"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="טלפון"
            onChange={handleInputChange}
          />
          <input
            className="description"
            type="text"
            name="message"
            placeholder="כתוב את ההודעה שלך כאן"
            onChange={handleInputChange}
          />
          <input
            className="submitButton"
            type="button"
            value="שלח"
            onClick={handleSubmit}
          />
        </div>
        <div className="contactUsInfo">
          <h1>צור קשר כדי לקבוע שיעור טניס ראשון!</h1>
          <div className="contactEmailAndPhone">
            <p className="contactEmail">מייל : on_court@outlook.com</p>
            <p className="contactPhone">
              טלפון : 054-4695039 <br />
              בדיע כרכבי
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsMainBody;
