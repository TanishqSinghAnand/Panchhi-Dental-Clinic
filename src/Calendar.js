import React, { setState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import TextField from "@material-ui/core/TextField";
import db from "./firebase";
import Header from "./Components/Header/Header";

const isEmailValid = (email) => {
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!email && typeof email === "string" && email.match(emailformat);
};
function Calendar() {
  
  const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          9,
          0,
          0,
          0
        )
      ),
      endTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          17,
          0,
          0,
          0
        )
      ),
    };
  });
  isEmailValid("anandtanishqs@gmail.com");
  return (
    <div className="selector">
    {/* <Header /> */}
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#00000"
        eventDurationInMinutes={30}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={isEmailValid("anandtanishqs@gmail.com")}
      />
      <div className="sendInfo">
        <TextField
          style={{ marginLeft: 50 }}
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          style={{ marginLeft: 50 }}
          id="outlined-number"
          label="Email"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default Calendar;
