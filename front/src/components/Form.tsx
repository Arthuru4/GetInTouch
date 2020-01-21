import React, { useState } from "react";
// @ts-ignore
import imgsrc from "../img/bg.webp";
import FormContent from "./FormContent";
import { submitRequest } from "../modules/axiosService";
import { Popup } from "./Popup/Popup";

const Form = () => {
  const [showPopup, setShowPopup] = useState(false);

  const formPopupSwitch = (toShowPopup: boolean): void => {
      setShowPopup(toShowPopup);
  };

  return (
    <div className="appWrapper">
      {!showPopup && (
        <div
          className="formWrapper"
          style={{
            backgroundImage: `url(${imgsrc})`
          }}
        >
          <FormContent onSubmitMethod={submitRequest} formPopupSwitch={formPopupSwitch}/>
        </div>
      )}
      {showPopup && <Popup  formPopupSwitch={formPopupSwitch}/>}
    </div>
  );
};

export default Form;
