import React from "react";
import { useParams, Link } from 'react-router-dom';

import Rating from '@mui/material/Rating';
import EditIcon from '@mui/icons-material/Edit';

import { users } from '../../data/userData';

import './ProfilePage.css';

const ProfilePage = () => {
  const { id } = useParams();
  const user = users.find(x => x.id == parseInt(id));

  return (
    <div className="profilePage">
      <div className="profileHeader">
        <h1>Profile</h1>
        {user.id == 1 && (
          <button>
            <EditIcon style={{ width: "30px", height: "30px" }} />
          </button>
        )}
      </div>
      <div className="profileInfo">
        <div className="leftProfile">
          <img alt="Profile" src={user.image} />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <div className="stars">
            <Rating name="rating" size="large" sx={{ fontSize: "40px" }} value={user.rating} readOnly precision={0.5} />
          </div>
        </div>
        <div className="rightProfile">
          <div className="profileItem">
            <h2>Skills Offered:&nbsp;&nbsp;</h2>
            <p>{user.skillsOffered.join(', ')}</p>
          </div>
          <div className="profileItem">
            <h2>Skills Wanted:&nbsp;&nbsp;</h2>
            <p>{user.skillsWanted.join(', ')}</p>
          </div>
          <div className="profileItem">
            <h2>Location:&nbsp;&nbsp;</h2>
            <p>{user.location}</p>
          </div>
          <div className="profileItem">
            <h2>Availability:&nbsp;&nbsp;</h2>
            <p>{user.availability.join(', ')}</p>
          </div>
          <div className="profileItem">
            <h2>Preferred Teaching Format:&nbsp;&nbsp;</h2>
            <p>{user.teachingFormat.join(', ')}</p>
          </div>
          {user.id != 1 && (
            <button className="button">
              <Link className="buttonLink" to={`/messages/${user.id}`}>
                Request Skill Exchange
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;