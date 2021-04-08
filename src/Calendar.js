import React, { useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import TextField from "@material-ui/core/TextField";
import db from "./firebase";
import Header from "./Components/Header/Header";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
import emailjs from "emailjs-com";
import "./Calendar.css";
import Button from "@material-ui/core/Button";
import * as EmailValidator from "email-validator";
import validator from "validator";
import { validate } from "email-validator";
function timeSlotValidator(slotTime) {
  const eveningTime = new Date(
    slotTime.getFullYear(),
    slotTime.getMonth(),
    slotTime.getDate(),
    18,
    0,
    0
  );
  const morningTime = new Date(
    slotTime.getFullYear(),
    slotTime.getMonth(),
    slotTime.getDate(),
    12,
    0,
    0
  );
  const isValid =
    slotTime.getTime() < eveningTime.getTime() &&
    slotTime.getTime() > morningTime;
  return isValid;
}

function Calendar() {
    
  console.log("Validation = " + validate("anandtanishqs@gmail.com"));
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState(null);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [isCalVisible, setIsCalVisible] = useState(false);




  function sendWhatsappMessage() {
    const accountSid = "AC4e197ad8662ecc7d9bccf943d21d38e6";
    const authToken = "28d4a6c0a6904409468721718243ebef";
    const client = require("twilio")(
      "AC4e197ad8662ecc7d9bccf943d21d38e6",
      "28d4a6c0a6904409468721718243ebef"
    );

    client.messages
      .create({
        body: `Your Appointment is to be conforimed at 5O clock`,
        from: `whatsapp:+14155238886`,
        to: `whatsapp:+917837552077`,
      })
      .then((message) => console.log(message.sid))
      .done();
  }

  function toggle() {
    var isValid = validate(email);
    if (name === "") {
      alert("Please enter you Name");
    } else if (email === "") {
      alert("Please enter your email");
    } else if (phoneNum === null) {
      alert("Please enter your phone number");
    } else if (phoneNum.lenght < 10) {
      alert("Please enter a valid phone number");
    } else if (isValid !== true) {
      alert("Please enter a valid email address");
    }
    else if(phoneNum.lenght > 10) {
      alert("Pls enter a valid phone number without country code")
    }    // if (
    //   name != "" &&
    //   email != "" &&
    //   phoneNum != null &&
    //   phoneNum.lenght >= 10 &&
    //   isValid === true
    // )
    else {
      console.log(isCalVisible);
      setIsCalVisible(true);
      console.log(isCalVisible);
    }
  }
  function sendEmail(e) {
    try {
      e.preventDefault();
    } catch {
      return null;
    }

    emailjs
      .sendForm("gmail", "template_def", e.target, "user_UxxNSe08V2cbFBLvnceoH")
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Appointment Booking request succesful you will be contacted shortly via a call or whastapp"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const handleScheduled = (dateTime, e) => {
    setTime(dateTime);
    console.log(time);
    // document.getElementById("tsaSubmit").click()
    sendEmail();
  };
  console.log(isCalVisible);

  console.log(isCalVisible);
  if (isCalVisible === true) {
    console.log(isCalVisible);

    return (
      <div className="selector">
        <div className="sendInfo">
          <div className="sendInfor">
            <TextField
              style={{ marginBottom: "50px" }}
              id="outlined-number"
              label="Name"
              type="Text"
              value={name}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(text) => {
                setName(text.target.value);
              }}
              variant="outlined"
              name="name"
              className="inp"
              required
            />
            <TextField
              style={{ marginBottom: "50px" }}
              id="outlined-number"
              label="E Mail ID"
              type="text"
              value={email}
              onChange={(text) => {
                setEmail(text.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="email"
              className="inp"
              required
            />
            <TextField
              style={{ marginBottom: "50px" }}
              id="outlined-number"
              label="Number"
              type="number"
              value={phoneNum}
              onChange={(text) => {
                setPhoneNum(text.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                maxLength: 10,
              }}
              variant="outlined"
              name="phone_number"
              className="inp"
              required
            />
          </div>
        </div>
        <div className="sendInfo">
          <form onSubmit={sendEmail} className="sendInfor">
            <DayTimePicker
              timeSlotSizeMinutes={30}
              timeSlotValidator={timeSlotValidator}
              onConfirm={handleScheduled}
              type="hidden"
              name="time"
            />
            <input
              type="text"
              className="invisible"
              type="hidden"
              // name="Timmings"
              value={time}
              name="time"
            />
            <input
              type="text"
              className="invisible"
              type="hidden"
              // name="Timmings"
              value={email}
              name="email"
            />
            <input
              type="text"
              className="invisible"
              type="hidden"
              // name="Timmings"
              value={phoneNum}
              name="number"
            />
            <input
              type="text"
              className="invisible"
              type="hidden"
              // name="Timmings"
              value={name}
              name="name"
            />
            {/* <Button type="submit" id="tsaSubmit" variant="contained">
              Submit
            </Button> */}
          </form>
        </div>
      </div>
    );
  } else if (isCalVisible === false) {
    console.log(isCalVisible);

    return (
      <div className="selector">
        {/* <Header /> */}
        <div className="sendInfo">
          <div className="sendInfor">
            <TextField
              style={{ marginBottom: "50px" }}
              id="outlined-number"
              label="Name"
              type="Text"
              value={name}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(text) => {
                setName(text.target.value);
              }}
              variant="outlined"
              name="name"
              className="inp"
              required
            />
            <TextField
              style={{ marginBottom: "50px" }}
              id="outlined-number"
              label="E Mail ID"
              type="text"
              value={email}
              onChange={(text) => {
                setEmail(text.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="email"
              className="inp"
              required
            />
            <TextField
              style={{ marginBottom: "50px" }}
              id="outlined-number"
              label="Number"
              type="number"
              value={phoneNum}
              onChange={(text) => {
                setPhoneNum(text.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                maxLength: 10,
              }}
              variant="outlined"
              name="phone_number"
              className="inp"
              required
            />
            <Button
              onClick={() => {
                toggle();
                console.log(isCalVisible);
                sendWhatsappMessage("5 O clock")
              }}
              variant="contained"
            >
              Slect Appointment
            </Button>
          </div>
        </div>

        {/* Fields */}
      </div>
    );
  }
}

export default Calendar;
