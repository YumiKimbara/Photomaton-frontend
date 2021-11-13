const logo = "/images/logo.png"

const Header = () => {
    return <>
    <div className="headerWrapper">
    <img className="logo" src={logo} alt="logo"/>
    <h1 className="neon">Photomaton</h1>
    </div>
    </>
}

export default Header;