import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const PhotoLink = (props) => {
    return (
   
            <img src={props.url} />
    )
}

export default PhotoLink;