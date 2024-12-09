import React, { useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import { userMeetings } from "../../data/userData";

import './CalendarPage.css';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedMeeting, setSelectedMeeting] = useState({});

  const tableHeaders = [
    "Date",
    "Name",
    "Subjects",
    "Start" + "\u00A0" + "Time",
    "End" + "\u00A0" + "Time",
    "Location"
  ];

  return (
    <div className="calendarPage">
      <h1>Calendar</h1>
      <div className="calendar">
        <div className="leftCalendar">
          <Calendar onChange={setDate} value={date} />
          <button className="addMeetingButton">Add Meeting</button>
          <button className="removeMeetingButton">Remove Meeting</button>
        </div>
        <div className="rightCalendar">
          <h2>Meetings</h2>
          <div className="meetingsTable">
            <Paper sx={{ margin: '10px', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: 'calc(100vh - 220px)' }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      {tableHeaders.map((listItem, index) => (
                        <TableCell key={index} sx={{ zIndex: 100 }}>{listItem}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userMeetings.map((meeting) => (
                      <TableRow key={meeting.id} onClick={() => { setSelectedMeeting(meeting) }}
                        sx={selectedMeeting.id == meeting.id ? { backgroundColor: "#2196F3", cursor: "pointer" } : { cursor: "pointer" }}>
                        <TableCell>{meeting.date}</TableCell>
                        <TableCell>{meeting.name}<br />with {meeting.person}</TableCell>
                        <TableCell>{meeting.subjects.map((subject) => (<p>{subject}</p>))}</TableCell>
                        <TableCell>{meeting.startTime}</TableCell>
                        <TableCell>{meeting.endTime}</TableCell>
                        <TableCell>{meeting.location}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalendarPage;