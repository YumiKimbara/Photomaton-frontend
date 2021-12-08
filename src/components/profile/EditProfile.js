import { Avatar, FormControl, Grid, Input, InputLabel, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TitleBar from '../TitleBar';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Edit } from '@mui/icons-material';

const EditProfile = () => {
    const [info, setInfo] = useState(null)
    const [userData, setUserData] = useState(null)
    const token = JSON.parse(localStorage.getItem('userInfo')).token
    const navigate = useNavigate();

    useEffect(async () => {
        const response = await axios.get('http://localhost:3333/api/users/getInfo', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = response.data.data
        setUserData(data)
        setInfo({firstName: data.firstName, lastName: data.lastName, userName: data.userName, bio: ''})
    }, [])

    useEffect(() => {
        console.log(info)
    })


    const handleSubmit = async(data) => {
        const response = await axios.post('http://localhost:3333/api/users/editUser/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        console.log('Info', data)
        // console.log(response)
        navigate(-1)
    }

    return userData && info?(
        <Grid container className='editProfileWrapper'>
            <TitleBar
                title="Edit Profile"
                leftBtn={{ type: "close", url: "/profile" }}
                rightBtn={{ type: "submit" }}
                onClick={()=>handleSubmit(info)}
            />

            <Avatar alt='' src='https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg' />

            <label htmlFor="chooseFile">
                <Edit className="icons" />
            </label>
            <input
                id="chooseFile"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                    // setImagePreviewUrlHandler(e);
                    
                }}
            />

            {/* Info update test */}
            {/* <Button color="error" onClick={handleSubmit}>Submit</Button> */}

            <Grid container width='100vw' height='70vh' display='flex' direction='column' justifyContent='space-evenly' alignItems='center'>
                    <FormControl variant='standard'>
                        <InputLabel htmlFor='username' style={{color: 'rgb(187, 187, 187'}}>Username</InputLabel>
                    <Input
                        style={{color: 'white'}}
                        id='username'
                        defaultValue={userData.userName}
                        onChange={(e) => setInfo({ ...info, userName: e.target.value })}
                    ></Input>
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel htmlFor='firstName' style={{color: 'rgb(187, 187, 187'}}>First Name</InputLabel>
                    <Input
                        style={{color: 'white'}}
                        id='firstName'
                        defaultValue={userData.firstName}
                        onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
                    ></Input>
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel htmlFor='lastName' style={{color: 'rgb(187, 187, 187'}}>Last Name</InputLabel>
                    <Input
                        style={{color: 'white'}}
                        id='lastName'
                        defaultValue={userData.lastName}
                        onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
                    ></Input>
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel htmlFor='bio' style={{color: 'rgb(187, 187, 187'}}>Bio</InputLabel>
                    <Input
                        style={{color: 'white'}}
                        id='bio'
                        defaultValue={userData.bio}
                        onChange={(e) => setInfo({ ...info, bio: e.target.value })}
                    ></Input>
                    </FormControl>
            </Grid>

        </Grid>
    ) : (<div>Waitting...</div>)
}

export default EditProfile;