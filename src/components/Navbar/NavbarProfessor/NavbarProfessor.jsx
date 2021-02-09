import './NavbarProfessor.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserGraduate, faBookOpen} from '@fortawesome/free-solid-svg-icons';
const NavbarProfessor = (props) => {
    return(
        
        <nav className="b-header__right">
            <ul className="b-header__nav">
                <li className="b-nav__menu b-nav__menu-item"><FontAwesomeIcon className="b-nav__icon" icon={faBookOpen}/>Course
                    <ul className="b-nav__submenu">
                    <Link to="/professor/student"><li className=" b-nav__submenu-item">All Students</li></Link>
                    </ul>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavbarProfessor;