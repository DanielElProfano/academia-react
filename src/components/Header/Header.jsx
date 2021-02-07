import NavbarAdmin from '../Navbar/NavbarAdmin';
import NavbarProfessor from '../Navbar/NavbarProfessor';
import { Link } from 'react-router-dom';
import { logout } from '../../api/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const NavbarUser = () => <div>USER</div>

const Header = (props) => {  //navBar
   
    const handleLogout = () => {
        logout();
        props.logoutUser(true);
    }

    return(
        <div className="b-header">
            <div className="b-header__left">
                <span><img src=''/>ASH ACADEMY</span>
                <Link to='/'>
                    <span className="b-nav__menu b-nav__menu-item"><FontAwesomeIcon className="b-nav__icon" icon={faHome}/>HOME</span>
                </Link>
                {!props.hasUser && <Link to="/login" className="b-header__menu b-header__menu--logout">Login</Link>}
            </div>
                {props.user.rol}
             {props.hasUser && <div>
                {props.user.rol === 'admin' && <div className="b-header__right"><NavbarAdmin />
                </div> }
                {props.user.rol === 'professor' && <div className="b-header__right"><NavbarProfessor />
                </div> }
                {props.user.rol === 'default' && <div className="b-header__right"><NavbarUser />
                </div> }
            </div>}  
            <div>{props.hasUser && 
                <Link to='/'>
                    <span className="b-header__menu b-header__menu--logout" onClick={handleLogout}>LogOut</span>
                </Link>}
            </div>
            
        </div>
    )
}

export default Header;