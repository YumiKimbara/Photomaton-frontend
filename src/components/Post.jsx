import { Avatar, Card, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState, useEffect } from 'react';

const Post = () => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>}
                title="Username or ID"
                subheader="Post time stamp"
            />
        </Card>
    )
}

export default Post;