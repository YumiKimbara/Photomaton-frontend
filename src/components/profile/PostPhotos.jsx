import { ImageList, ImageListItem } from '@mui/material';
import React, { useState, useEffect } from 'react';

const PostPhotos = (props) => {
    return (
        <ImageList cols={3} rowHeight={164}>
            {props.img.photos.map((obj) =>
                <button  className="postImages">
                    <ImageListItem key={obj.id}>
                        <img src={obj.src.small} />
                    </ImageListItem>

                </button>
            )}
        </ImageList>
    )
}

export default PostPhotos;