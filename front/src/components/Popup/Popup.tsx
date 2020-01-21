import React from "react";
import "./Popups.scss"

interface IProps {
  formPopupSwitch: (toShowPopup: boolean) => void;
}

export const Popup = (props: IProps) => {
  return (
    <div
      className="popup"
      data-gtm-vis-recent-on-screen-6130796_6="50213158"
      data-gtm-vis-first-on-screen-6130796_6="50213158"
      data-gtm-vis-total-visible-time-6130796_6="100"
      data-gtm-vis-has-fired-6130796_6="1"
    >
      <h3>Thanks for filling out our form!</h3>
      <p>
        We will look over your message and Tatiana will get back to you in 24
        hours. In the meantime, you can check the <a href="#">Foundation</a>{" "}
        section, look over our <a href="#">projects collection</a> or browse
        through our latest <a href="#">blog posts</a>.
      </p>
      <p>Your mate at MadAppGang, Jack Rudenko.</p>
      <div className="popupOkBtn" onClick={() => props.formPopupSwitch(false)}>
        OK
      </div>
    </div>
  );
};
