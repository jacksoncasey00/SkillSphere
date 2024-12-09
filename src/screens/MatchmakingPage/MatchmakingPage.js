import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import Rating from '@mui/material/Rating';

import { users, skills } from '../../data/userData';

import './MatchmakingPage.css';

const MatchmakingPage = () => {

  const tableHeaders = [
    "",
    "Name",
    "Rating",
    "Skills" + "\u00A0" + "Offered",
    "Skills" + "\u00A0" + "Wanted",
    ""
  ];

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);

  useEffect(() => {
    setFilteredUsers(users);
  }, []);

  useEffect(() => {
    filterUsers();
  }, [skillsOffered, skillsWanted]);

  const filterUsers = () => {
    let filteredUsers = users.filter(x =>
      (x.skillsOffered.some(y => skillsOffered.map(z => z.name).includes(y)) || skillsOffered.length == 0) &&
      (x.skillsWanted.some(y => skillsWanted.map(z => z.name).includes(y)) || skillsWanted.length == 0));
    setFilteredUsers(filteredUsers);
  };

  return (
    <div className="matchmakingPage">
      <h1>Skill Matchmaking</h1>

      <div className="matchmakingSearch">

        <Autocomplete
          multiple
          id="skillsOffered"
          options={skills}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name}
              </li>
            );
          }}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Skills Offered" />
          )}
          onChange={(event, newValue) => {
            setSkillsOffered(newValue);
          }}
        />

        <Autocomplete
          multiple
          id="skillsWanted"
          options={skills}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name}
              </li>
            );
          }}
          style={{ width: 500, marginLeft: "50px" }}
          renderInput={(params) => (
            <TextField {...params} label="Skills Wanted" />
          )}
          onChange={(event, newValue) => {
            setSkillsWanted(newValue);
          }}
        />

      </div>
      <div className="matchmakingTable">
        <Paper sx={{ margin: '10px', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 'calc(100vh - 210px)' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {tableHeaders.map((listItem, index) => (
                    <TableCell key={index} sx={{ zIndex: 100 }}>{listItem}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell><img width={60} alt="Profile" src={user.image} /></TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell><Rating name="rating" value={user.rating} readOnly precision={0.5} /></TableCell>
                    <TableCell>{user.skillsOffered.map((skill) => (<div>{skill}</div>))}</TableCell>
                    <TableCell>{user.skillsWanted.map((skill) => (<div>{skill}</div>))}</TableCell>
                    <TableCell><Link className="buttonLink" to={`/profile/${user.id}`}>
                      View Profile
                    </Link></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};
export default MatchmakingPage;