import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// const theme = createTheme({
//   components: {
//     MuiIcon: {
//       defaultProps: {
//         // Replace the `material-icons` default value.
//         baseClassName: 'material-icons',
//       },
//     },
//   },
// });



const Footer = () => {
    
    return <>
    <div className="footerWrapper">
    <HomeIcon baseClassName="icons" sx={{ fontSize: 35 }}/>
    <SearchIcon sx={{ fontSize: 35 }}/>
    <ControlPointIcon sx={{ fontSize: 35 }}/>
    <FavoriteBorderIcon sx={{ fontSize: 35 }}/>
    <AccountCircleIcon sx={{ fontSize: 35 }}/>
    </div>
    </>
}

export default Footer;