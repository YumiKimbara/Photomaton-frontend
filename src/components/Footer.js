import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Footer = () => {
    return <>
    <div className="footerWrapper">
    <HomeIcon className="icons" sx={{ fontSize: 35 }}/>
    <SearchIcon className="icons" sx={{ fontSize: 35 }} />
    <ControlPointIcon className="icons" sx={{ fontSize: 35 }}/>
    <FavoriteBorderIcon className="icons" sx={{ fontSize: 35 }} onClick={() => alert('modal')}/>
    <AccountCircleIcon className="icons" sx={{ fontSize: 35 }}/>
    </div>
    </>
}

export default Footer;