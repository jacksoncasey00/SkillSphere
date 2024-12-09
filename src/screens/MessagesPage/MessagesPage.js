import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';

import { users, userMessages } from "../../data/userData";

import SendIcon from '@mui/icons-material/Send';

import './MessagesPage.css';
import { ContactSupportOutlined } from "@mui/icons-material";

const MessagesPage = () => {
  const { id } = useParams();

  const defaultUser = {
    id: 0,
    userId: 0,
    messages: [{ text: "", sent: false }]
  };

  const [newUserMessages, setNewUserMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(defaultUser);
  const [message, setMessage] = useState("");

  const selectUser = (event, id) => {
    setSelectedUser(newUserMessages?.find(x => x.id == id) ?? defaultUser);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    let newMessage = { text: message, sent: true };
    let newUser = { ...selectedUser };
    newUser.messages.push(newMessage);
    setSelectedUser(newUser);
    setMessage("");
  }

  useEffect(() => {
    let newUserMessages = userMessages;
    if (newUserMessages.find(x => x.userId == parseInt(id))) {
      setNewUserMessages(newUserMessages);
      setSelectedUser(newUserMessages.find(x => x.id == parseInt(id)));
    }
    else {
      console.log(newUserMessages);
      console.log(id);
      newUserMessages.push({ id: newUserMessages[newUserMessages.length - 1].id + 1, userId: parseInt(id), messages: [] });
      setNewUserMessages(newUserMessages);
      setSelectedUser(newUserMessages.find(x => x.id == parseInt(id)));
    }
  }, []);

  return (
    <div className="messagesPage">
      <h1>Messages</h1>
      <div className="messages">
        <div className="leftPage">
          <List sx={{ width: '100%' }}>
            {newUserMessages.map((user) => (
              <>
                <ListItemButton
                  selected={selectedUser?.id ? selectedUser.id === user.id : false}
                  onClick={(event) => selectUser(event, user.id)}
                >
                  <ListItem sx={{ height: '100px' }} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar sx={{ width: '75px', height: '75px' }} alt={users.find(x => x.id == user.userId).name} src={users.find(x => x.id == user.userId).image} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ marginLeft: '20px', flex: '1 1 auto', minWidth: 0, }}
                      primary={
                        <Typography
                          component="span"
                          sx={{ display: 'block', fontSize: '24px' }}
                        >{users.find(x => x.id == user.userId).name}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          component="span"
                          sx={{
                            color: "gray", fontSize: '24px', whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis', display: 'block'
                          }}
                        >
                          {user.messages[0]?.text ?? ""}
                        </Typography>
                      }
                    />
                  </ListItem>
                </ListItemButton>
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
        </div>
        {selectedUser && selectedUser?.id !== 0 && (
          <div className="rightPage">
            <h2>{users.find(x => x.id == selectedUser.userId)?.name ?? ""}</h2>
            <div className="messageContent">
              <div className="sendMessage">
                <TextField
                  id="messageSend"
                  label="Message"
                  variant="filled"
                  sx={{ width: '500px' }}
                  value={message}
                  onChange={(e) => { setMessage(e.target.value) }}
                  onKeyDown={handleKeyPress}
                />
                <button onClick={() => { sendMessage() }}>
                  <SendIcon style={{ width: "30px", height: "30px" }} />
                </button>
              </div>
              {selectedUser.messages.slice().reverse().map((message, index) => (
                <div className="messageBlock" style={message.sent ? { justifyContent: "flex-end" } : {}} key={index}>
                  <div className="message"
                    style={message.sent ? { backgroundColor: "#2196F3", color: "#FFFFFF" } :
                      { backgroundColor: "#FFC107", color: "#212121" }}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MessagesPage;