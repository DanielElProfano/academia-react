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
    const {hasUser, user} = props
    return (
        <div className="b-header">
            <div className="b-header__left">
                <span><img src='' alt=""/>ASH ACADEMY</span>
                <Link to='/'>
                    <span className="b-nav__menu b-nav__menu-item"><FontAwesomeIcon className="b-nav__icon" icon={faHome}/>HOME</span>
                </Link>
                {!hasUser && <Link to="/login" className="b-header__menu b-header__menu--logout">Login</Link>}
            </div>
            <div>
            {hasUser && <img className="b-header__image" src={props.user.photo} alt="an user imagen"/>}
            </div>
             {hasUser && <div>
                {user.rol === 'admin' && <div className="b-header__right"><NavbarAdmin />
                </div> }
                {user.rol === 'professor' && <div className="b-header__right"><NavbarProfessor />
                </div> }
                {user.rol === 'default' && <div className="b-header__right"><NavbarUser />
                </div> }
            </div>}  
            <div>{hasUser && 
                <Link to='/'>
                    <span className="b-header__menu b-header__menu--logout" onClick={handleLogout}>LogOut</span>
                </Link>}
            </div>
            
        </div>
    )
}

export default Header;