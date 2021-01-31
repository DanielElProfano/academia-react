import './NavbarAdmin.scss';
import { Link } from 'react-router-dom';
import { logout } from '../../../api/auth';
const NavbarAdmin = (props) => {

    return(
        <nav className="b-header__right">
                <ul className="b-header__nav">

                   <Link to="/professor"><li className="b-header__menu">Professors</li></Link>
                        showProfessor
                        HireProfessor

                    <li className="b-header__menu">Student</li>
                    <li className="b-header__menu">Courses</li>
                        list
                    <li className="b-header__menu b-header__menu--logout" onClick={logout}>LogOut</li>
                   
                </ul>
            
            </nav> 
    )
}
export default NavbarAdmin;