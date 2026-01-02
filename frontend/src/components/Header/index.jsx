import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import colors from "../../utils/style/color";
import logo from '../../assets/logoo.png';

const CardHeader = styled.header`
background-color: ${colors.earthDark} !important;
margin-bottom : 0px !important;
// border-bottom : solid 0.15rem ${colors.primaryLight};
`

const NavBar = styled.nav`
background-color: ${colors.backgroundLight} !important;
border-bottom : solid 0.15rem ${colors.primaryLight};
margin-bottom : 0px !important;
`

const Boutton = styled.button`
background-color: ${colors.primary} !important;
color : #FFF;
`

const NavItemLink = styled(Link)`
  color: ${({ $isActive }) =>
    $isActive ? colors.primary : colors.secondary} !important;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};

  &:hover {
    color: ${colors.primary} !important;
  }
`;


function Header() {
    const location = useLocation();
    return (

    <CardHeader>
        <NavBar className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <Link  to="/" className="d-flex align-items-center gap-2">
                    <img src={logo} alt="Logo" width="50" height="50" /> GAD
                    </Link>
                    <Link className="" to="/">
                        Génie Alimentaire Durable
                    </Link>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavItemLink className="nav-link active" aria-current="page" to="home" $isActive={location.pathname.startsWith("/home")} >Accueil</NavItemLink>
                    </li>

                    <li className="nav-item">
                    <NavItemLink className="nav-link" to="/a-propos" $isActive={location.pathname.startsWith("/a-propos")}>A propos</NavItemLink>
                    </li>

                    <li className="nav-item">
                    <NavItemLink className="nav-link" to="/blog" $isActive={location.pathname.startsWith("/blog")}>Blog</NavItemLink>
                    </li>

                    <li className="nav-item">
                    <NavItemLink className="nav-link" to="/contact" $isActive={location.pathname.startsWith("/contact")}>Contact</NavItemLink>
                    </li>

                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Test
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                        {/* <li><hr className="dropdown-divider" ></li> */}
                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                    </ul>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <Boutton className="btn btn-outline-success" type="submit">S'abonner</Boutton>
                </form>
                </div>
            </div>
            </NavBar>
    </CardHeader>
    
    )
}


export default Header