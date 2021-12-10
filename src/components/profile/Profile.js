import React, { useState, useEffect, Suspense } from 'react';
import {Avatar, Button, Grid} from '@mui/material'
import UserInfo from './UserInfo';
import PostPhotos from './PostPhotos';
import axios from 'axios';

const Profile = () => {
    const [isUser, setIsUser] = useState(true)
    const [userData, setUserData] = useState(null)
    const [postData, setPostData] = useState(null)
    const token = JSON.parse(localStorage.getItem('userInfo')).token
    const userID = JSON.parse(localStorage.getItem('userInfo'))._id

    useEffect(async () => {
        // Fetch user data
        const userRes = await axios.get('http://localhost:3333/api/users/getUser', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const userData = userRes.data.data
        setUserData(userData)

        // Fetch user posts
        const postsRes = await axios.get(`http://localhost:3333/api/post/getPost/${userID}`)
    }, [])

    return (userData && postData) ? (
        <Grid container className="profileWrapper" direction="column" spacing={2}>
            <UserInfo user={userData} />
            <PostPhotos img={postData} />
        </Grid>
    ):(<div>Wait a sec</div>)
    
}

export default Profile