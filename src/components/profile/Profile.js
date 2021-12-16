import React, { useState, useEffect } from 'react';
import { Avatar, Button, Grid } from '@mui/material'
import UserInfo from './UserInfo';
import PostPhotos from './PostPhotos';
import axios from 'axios';
import { useParams } from 'react-router';

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [userData, setUserData] = useState(null)
    const [postData, setPostData] = useState([])
    // const token = JSON.parse(localStorage.getItem('userInfo')).token
    const { id } = useParams();

    // User Login Check, if the user is not logged in, redirect to login page

    const navigate = useNavigate();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;




    useEffect(async () => {
        // Fetch user data
        try {
            const userRes = await axios.get(`http://localhost:3333/api/users/getUser/${id}`)
            setUserData(userRes.data.data)
        } catch (error) {
            console.log(error)
        }

        // Fetch user posts
        try {
            const postsRes = await axios.get(`http://localhost:3333/api/post/getPost/${id}`)
            setPostData(postsRes.data.data)
            console.log(postsRes.data.data)
        } catch (error) {
            console.log(error)
        }
    }, [id])

    return (userData) ? (
        <Grid container className="profileWrapper" direction="column" spacing={2} sx={{ width: '100vw', margin: '0' }}>

            <UserInfo user={userData} />
            <PostPhotos img={postData} />
        </Grid>
    ) : (<div>Wait a sec</div>)

}

export default Profile