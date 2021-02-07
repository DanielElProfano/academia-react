import './NavbarProfessor.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGraduationCap, faUserGraduate, faBookOpen} from '@fortawesome/free-solid-svg-icons';
const NavbarProfessor = (props) => {
    return(
        
        <nav className="b-header__right">
            <ul className="b-header__nav">
           
                <li className="b-nav__menu b-nav__menu-item"><FontAwesomeIcon className="b-nav__icon" icon={faUserGraduate}/>Student
                    <ul className="b-nav__submenu">
                    <Link to="/professor/student"><li className=" b-nav__submenu-item">All Students</li></Link>
                        
                    <Link to="/student/create"><li className="b-nav__submenu-item">new Student</li></Link>
                    <Link to="/student/add"><li className="b-nav__submenu-item">Add Course</li></Link>
                    </ul>
                </li>
                <li className="b-nav__menu b-nav__menu-item"><FontAwesomeIcon className="b-nav__icon" icon={faBookOpen}/>Course
                    <ul className="b-nav__submenu">
                    <Link to="/course"><li className=" b-nav__submenu-item">Courses</li></Link>
                    <Link to="/course/create"><li className="b-nav__submenu-item">new rCourse</li></Link>
                    <Link to="/course/add"><li className="b-nav__submenu-item">Add Professor</li></Link>
                    </ul>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavbarProfessor;