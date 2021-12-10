import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const PostPhotos = (props) => {
    return (
        <ImageList cols={3} rowHeight={164}>
            {props.img.map((data) =>
                <button  className="postImages">
                    <ImageListItem key={uuidv4()}>
                        <img src={data.imageUrl[0]} />
                    </ImageListItem>
                </button>
            )}
        </ImageList>
    )
}

export default PostPhotos;