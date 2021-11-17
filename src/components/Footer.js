import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

const Footer = () => {
    return <>
        <div className="footerWrapper">
            <IconButton component={Link} to="/">
                <HomeIcon className="icons" sx={{ fontSize: 35 }}/>
            </IconButton>
            <SearchIcon className="icons" sx={{ fontSize: 35 }} />
            <IconButton component={Link} to="/newPost">
                <ControlPointIcon className="icons" sx={{ fontSize: 35 }}/>
            </IconButton>
            <FavoriteBorderIcon className="icons" sx={{ fontSize: 35 }} />
            <IconButton component={Link} to="/profile">
                <AccountCircleIcon className="icons" sx={{ fontSize: 35 }}/>
            </IconButton>
        </div>
    </>
}

export default Footer;