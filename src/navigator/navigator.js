import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from '../screens/HomePage/HomePage';
import CalendarPage from '../screens/CalendarPage/CalendarPage';
import MatchmakingPage from '../screens/MatchmakingPage/MatchmakingPage';
import MessagesPage from '../screens/MessagesPage/MessagesPage';
import ProfilePage from '../screens/ProfilePage/ProfilePage';

import './navigator.css'

export default function Navigator() {
  return (
    <Router>
      <div className='topBar'>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/matchmaking">
          Skill Matchmaking
        </Link>
        <Link className="link" to="/calendar">
          Calendar
        </Link>
        <Link className="link" to="/messages/2">
          Messages
        </Link>
        <Link className="link" to="/profile/1">
          Profile
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matchmaking" element={<MatchmakingPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/messages/:id" element={<MessagesPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}