import { FormControl, Grid, Input, InputLabel, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TitleBar from '../TitleBar';

const EditProfile = () => {
    return (
        <Grid container className='editProfileWrapper'>
            <TitleBar
                title="Edit Profile"
                leftBtn={{ type: "close", url: "/profile" }}
                rightBtn={{ type: "submit"}}
            />
            <Grid container width='100vw' height='70vh' display='flex' direction='column' justifyContent='space-evenly' alignItems='center'>
                <FormControl variant='standard'>
                    <InputLabel htmlFor='username' style={{color: 'rgb(187, 187, 187'}}>Username</InputLabel>
                    <Input id='username'></Input>
                </FormControl>
                <FormControl variant='standard'>
                    <InputLabel htmlFor='email' style={{color: 'rgb(187, 187, 187'}}>Email</InputLabel>
                    <Input id='email'></Input>
                </FormControl>
                <FormControl variant='standard'>
                    <InputLabel htmlFor='firstName' style={{color: 'rgb(187, 187, 187'}}>First Name</InputLabel>
                    <Input id='firstName'></Input>
                </FormControl>
                <FormControl variant='standard'>
                    <InputLabel htmlFor='lastName' style={{color: 'rgb(187, 187, 187'}}>Last Name</InputLabel>
                    <Input id='lastName'></Input>
                </FormControl>
                <FormControl variant='standard'>
                    <InputLabel htmlFor='bio' style={{color: 'rgb(187, 187, 187'}}>Bio</InputLabel>
                    <Input id='bio'></Input>
                </FormControl>
                {/* <TextField className='editForm' sx={{color: 'white'}} label='Username' variant='standard'></TextField> */}
                {/* <TextField label='Email' variant='standard'></TextField>
                <TextField label='First Name' variant='standard'></TextField>
                <TextField label='Last Name' variant='standard'></TextField>
                <TextField label='Bio' variant='standard'></TextField> */}

            </Grid>

        </Grid>
    )
}

export default EditProfile;