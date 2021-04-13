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
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function Calendar() {
  console.log("Validation = " + validate("anandtanishqs@gmail.com"));
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState(null);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [isCalVisible, setIsCalVisible] = useState(false);

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
    } else if (phoneNum.lenght > 10) {
      alert("Pls enter a valid phone number without country code");
    } // if (
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
      <ThemeProvider theme={theme}>
        <div className="selector">
          <div className="sendInfo">
            <div className="sendInfor">
              <Paper style={{ height: "100%" }} className="sendInfor">
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
                  variant="filled"
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
                  variant="filled"
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
                  variant="filled"
                  name="phone_number"
                  className="inp"
                  required
                />
              </Paper>
            </div>
          </div>
          <div className="sendInfo">
            <form onSubmit={sendEmail} className="sendInfor">
              <div className="bl">
                <DayTimePicker
                  timeSlotSizeMinutes={30}
                  timeSlotValidator={timeSlotValidator}
                  onConfirm={handleScheduled}
                  type="hidden"
                  name="time"
                />
              </div>
              <Paper style={{ height: "100%" }} className="sendInfor">
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
              </Paper>
            </form>
          </div>
        </div>
      </ThemeProvider>
    );
  } else if (isCalVisible === false) {
    console.log(isCalVisible);

    return (
      <ThemeProvider theme={theme}>
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
                name="phone_number"
                className="inp"
                required
              />
              <Button
                onClick={() => {
                  toggle();
                  console.log(isCalVisible);
                }}
                variant="contained"
              >
                Slect Appointment
              </Button>
            </div>
          </div>

          {/* Fields */}
        </div>
      </ThemeProvider>
    );
  }
}

export default Calendar;
