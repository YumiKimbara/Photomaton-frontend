import { Edit, PeopleAlt } from '@mui/icons-material';
import { Avatar, Button, Grid, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
// import { io } from 'socket.io-client';

const UserInfo = (props) => {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [friendRequestBtn, setFriendRequestBtn] = useState(<div></div>)
    // const socket = io('http://localhost:5000')

    useEffect(() => {
        if (userInfo._id === props.user._id) {
            setFriendRequestBtn(
                <Grid item display="flex" justifyContent="start">
                    <Button onClick={()=>navigate(`/friends/${props.user._id}`)}>Friends</Button>
                    <Button onClick={()=>navigate(`/editProfile`)}>Edit profile</Button>
                </Grid>
            )
        } else {
            if (props.user.friends.friendsList.some((item) => item.userID === userInfo._id)) {
                setFriendRequestBtn(
                    <Grid item display="flex" justifyContent="start">
                        <Button onClick={()=>navigate(`/friends/${props.user._id}`)}>Friends</Button>
                        <Button onClick={removeFriend}>Unfriend</Button>
                    </Grid>
                )
            } else if (props.user.friends.request.some((item)=>item.userID === userInfo._id)){
                setFriendRequestBtn(
                    <Grid item display="flex" justifyContent="start">
                        <Button disabled='true'>Pending</Button>
                    </Grid>
                )
            } else {
                setFriendRequestBtn(
                    <Grid item display="flex" justifyContent="start">
                        <Button onClick={addFriend}>Add Friend</Button>
                    </Grid>
                )
            }
        }
    }, [])

    const removeFriend = async() => {
        const res = await axios.put('http://localhost:3333/api/users/friendRemove', {
            senderID: userInfo._id,
            receiverID: props.user._id
        })
        window.location.reload();
    }

    const addFriend = async () => {
        const res = await axios.put('http://localhost:3333/api/users/friendRequest', {
            senderID: userInfo._id,
            receiverID: props.user._id
        })
        window.location.reload();
        // socket.emit('addFriend', ())
    }

    return (
        <Grid container spacing={2} sx={{ width:"96vw", margin:"3vh auto" }}>
            <Grid item xs={4} alignSelf="center">
                <Avatar sx={{height: '90px', width: '90px'}} src={props.user.avatarUrl} />
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h6" color="white">{props.user.userName}</Typography>
                {friendRequestBtn}
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant='body2'
                    sx={{
                        color: 'white',
                        maxHeight: '20vh',
                        whiteSpace: 'pre-line',
                        wordWrap:'break-word',
                        overflow: 'scroll'
                    }}>{props.user.bio}</Typography>
                {/* <Button>Show more...</Button> */}
            </Grid>
        </Grid>
    )
}

export default UserInfo;