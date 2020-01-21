import React, { useState } from "react";
import { ISubmitData } from "../modules/axiosService";
import { AxiosPromise } from "axios";

interface IProps {
  onSubmitMethod: (msg: ISubmitData) => AxiosPromise;
  formPopupSwitch: (toShowPopup: boolean) => void;
}

const FormContent = (props: IProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(true);

  const onChangeNameHandler = (event: any): void => {
    setName(event.target.value);
  };

  const onChangeEmailHandler = (event: any): void => {
    setEmail(event.target.value);
  };

  const onChangeMsgHandler = (event: any): void => {
    setMsg(event.target.value);
  };

  const onSubmitHandler = (event: any): void => {
    event.preventDefault();
    if (!submitEnabled) return;
    setSubmitEnabled(false);

    const stateObj: ISubmitData = {
      name,
      email,
      msg
    };
    props
      .onSubmitMethod(stateObj)
      .then(
        e => {
          // ON RESPONSE HERE
          props.formPopupSwitch(true);
          setName("");
          setEmail("");
          setMsg("");
        },
        e => {
          // ON ERROR HERE
        }
      )
      .finally(() => setSubmitEnabled(true));
  };

  return (
    <div className="formContent">
      <div className="formHeader">
        <div className="formHeader_title">Get in touch</div>
        <div className="formHeader_subTitle">
          Let us know
          <br />
          how we can help
        </div>
      </div>
      <div className="formBody">
        <form className="form" onSubmit={onSubmitHandler} method="POST">
          <input
            type="text"
            name="name"
            className="formInput"
            placeholder="Name"
            value={name}
            onChange={onChangeNameHandler}
            required={true}
          />
          <input
            type="email"
            name="email"
            className="formInput"
            placeholder="E-mail"
            value={email}
            onChange={onChangeEmailHandler}
            required={true}
          />
          <textarea
            name="message"
            className="formTextArea"
            placeholder="Message"
            value={msg}
            onChange={onChangeMsgHandler}
          />
          <button type="submit" className="submitBtn">
            {submitEnabled ? "Send" : "Sending..."}
          </button>
        </form>
        <div className="formNext">
          <h3 className="formNext_title">What's next</h3>
          <p>
            We’ll contact you within a few hours with our next steps. We
            normally schedule a call with our engineers to discuss your project
            in more detail. If you’d like to sign an NDA, please let us know.
            We’ll prepare it for you.
          </p>
          <p>
            Since we live on two different continents (Australia and Europe) we
            are available around the clock.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
