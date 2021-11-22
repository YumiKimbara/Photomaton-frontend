import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

import {useDispatch} from 'react-redux';
import {toggleModal} from '../actions/actions'

const Footer = () => {   
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return <>
        <div className="footerWrapper">
            <HomeIcon className="icons" sx={{ fontSize: 35 }} onClick={()=> navigate("/")} />
            <SearchIcon className="icons" sx={{ fontSize: 35 }} onClick={()=> navigate("/explore")}/>
            <ControlPointIcon className="icons" sx={{ fontSize: 35 }} />
            <FavoriteBorderIcon className="icons" sx={{ fontSize: 35 }} onClick={() => dispatch(toggleModal())}/>
            <AccountCircleIcon className="icons" sx={{ fontSize: 35 }} onClick={()=> navigate("/login")}/>
        </div>
    </>
}

export default Footer;