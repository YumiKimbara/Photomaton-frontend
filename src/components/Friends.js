import React, { useState, useEffect } from 'react';
import TitleBar from './TitleBar';

const Friends = () => {
    return (
        <TitleBar
            title="Friends"
            leftBtn={{ type: "return", url: "/profile" }}
            rightBtn={{ type: "none"}}
        />
    )
}

export default Friends;