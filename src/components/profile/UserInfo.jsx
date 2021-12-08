import { Edit, PeopleAlt } from '@mui/icons-material';
import { Avatar, Grid, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserInfo = (props) => {
    return (
        <Grid container spacing={2} width="95vw" margin="30px auto">
            <Grid item alignSelf="center">
                <Avatar sx={{height: '90px', width: '90px'}} src='https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg' />
            </Grid>
            <Grid item>
                <Typography variant="h4" color="white">{props.user.userName}</Typography>
                {/* <Typography variant="subtitle2" marginLeft="5px" color="white">{props.user.id}</Typography> */}
                <Grid item display="flex" justifyContent="start">
                    <IconButton component={Link} to="/friends">
                        <PeopleAlt className="icons" />
                    </IconButton> 
                    <IconButton component={Link} to="/editProfile">
                        <Edit className="icons" />
                    </IconButton> 
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UserInfo;