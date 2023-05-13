import React from "react";
import "./mainContactBody.scss";
import StyledLine from "../../StyledLine";

function ContactUsMainBody() {
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
          <input type="text" placeholder="שם" />
          <input type="text" placeholder="מייל" />
          <input type="text" placeholder="טלפון" />
          <input className="description" type="text"  placeholder="כתוב את ההודעה שלך כאן"/>
          {/* <input className="description" type="text" placeholder="כתוב את ההודעה שלך כאן" /> */}
          <input className="submitButton" type="button" value="שלח"/>
        </div>
        <div className="contactUsInfo">
          <h1>צור קשר כדי לקבוע שיעור טניס ראשון!</h1>
          <div className="contactEmailAndPhone">
            <p className="contactEmail">מייל : on_court@outlook.com</p>
            <p className="contactPhone">טלפון : 054-4695039 <br/>בדיע כרכבי</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsMainBody;
