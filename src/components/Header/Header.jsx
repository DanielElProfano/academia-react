import NavbarAdmin from '../Navbar/NavbarAdmin';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../api/auth';
import './Header.scss';

const NavbarUser = () => <div>USER</div>
const NavbarProfessor = () => <div>PROFESSOR</div>

const getNavbar = role => {
  
    if (role === 'admin') return <NavbarAdmin />
    if (role === 'user') return <NavbarUser />
    if (role === 'professor') return <NavbarProfessor />
}
const Header = (props) => {  //navBar
   
    const handleLogout = () => {
        logout();
        props.logoutUser(true);
    }

    return(
        <div className="b-header">
            <div className="b-header__left">
                <span><img src=''/>ACADEMIA LOGO</span>
                {!props.hasUser && <Link to="/login">Login</Link>}
            </div>
            
             {props.hasUser && <div className="b-header__right"><NavbarAdmin />
             {/* {getNavbar(props.user.rol)} */}
            </div> 
            }
            <div>{props.hasUser && 
                <Link to='/'>
                    <li className="b-header__menu b-header__menu--logout" onClick={handleLogout}>LogOut</li>
                </Link>}
            </div>
            
        </div>
    )
}

export default Header;