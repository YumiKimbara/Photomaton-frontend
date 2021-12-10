import { Edit, PeopleAlt } from '@mui/icons-material';
import { Avatar, Button, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = (props) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    return (
        <Grid container spacing={2} sx={{ width:"96vw", margin:"3vh auto" }}>
            <Grid item xs={4} alignSelf="center">
                <Avatar sx={{height: '90px', width: '90px'}} src={props.user.avatarUrl} />
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h6" color="white">{props.user.userName}</Typography>
                {/* <Typography variant="subtitle2" marginLeft="5px" color="white">{props.user.id}</Typography> */}
                
                {userInfo._id == props.user._id ? (
                    <Grid item display="flex" justifyContent="start">
                    <IconButton component={Link} to="/friends">
                        <PeopleAlt className="icons" />
                    </IconButton> 
                    <IconButton component={Link} to="/editProfile">
                        <Edit className="icons" />
                    </IconButton> 
                </Grid>
                ):(<div></div>)}
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