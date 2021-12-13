import { ArrowBack } from '@mui/icons-material';
import { Avatar, Button, Grid, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Friends = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [friendsList, setFriendsList] = useState([])

    useEffect(async() => {
        try {
            const friListRes = await axios.get(`http://localhost:3333/api/users/getUser/${id}`)
            setFriendsList(friListRes.data.data.friends.friendsList)

        } catch (error) {
            console.log(error)
        }
        
    }, [])

    return (
        <Grid container className='friendsWrapper'>
            <Grid container className="titleBarWrapper" margin='10px 0'>
                <Grid container width="100vw" display="flex" direction="row" justifyContent="space-between" alignItems="center">
                    <IconButton onClick={() => navigate(`/profile/${id}`)}>
                            <ArrowBack className='barIcon' />
                    </IconButton>
                    <Typography variant="h5" color="white">Friends</Typography>
                    <div></div>
                </Grid>
            </Grid>
            <Grid container width="100vw" display="flex" direction="column">
                {friendsList.map((obj) => {
                    return (
                        <div key={obj.userID} className='simpleUserInfo' onClick={ ()=>navigate(`/profile/${obj.userID}`) }>
                            <Avatar alt='' src={obj.avatarUrl} />
                            <Typography variant='h6' color='white'>{ obj.userName }</Typography>
                        </div>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default Friends;