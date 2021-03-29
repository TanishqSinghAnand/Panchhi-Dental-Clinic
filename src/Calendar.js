import React, { setState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import TextField from "@material-ui/core/TextField";
import db from "./firebase";
import Header from "./Components/Header/Header";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
import emailjs from "emailjs-com";
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
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_def", e.target, "user_UxxNSe08V2cbFBLvnceoH")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="selector">
      {/* <Header /> */}
      <DayTimePicker
        timeSlotSizeMinutes={30}
        timeSlotValidator={timeSlotValidator}
      />

      {/* Fields */}
      <div className="sendInfo">
        <form onSubmit={sendEmail}>
          <TextField
            style={{ marginLeft: 50 }}
            id="outlined-number"
            label="Name"
            type="Text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            name="name"
          />
          <TextField
            style={{ marginLeft: 50 }}
            id="outlined-number"
            label="E Mail ID"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            name="email"
          />
          <TextField
            style={{ marginLeft: 50 }}
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            name="phone_number"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Calendar;
