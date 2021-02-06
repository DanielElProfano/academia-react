import './NavbarAdmin.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App.jsx';
const NavbarAdmin = (props) => {

    const hasUser = useContext(UserContext); //ha useContext le pasamos el contexto creado en App
    return(
        <>
            <nav className="b-header__right">
                <ul className="b-header__nav">
                    <li className="b-nav__menu b-nav__menu-item">Professor
                        <ul className="b-nav__submenu">
                        <Link to="/professor"><li className=" b-nav__submenu-item">List</li></Link>
                            
                        <Link to="/professor/create"><li className="b-nav__submenu-item">Hire</li></Link>
                        </ul>
                    </li>
                    <li className="b-nav__menu b-nav__menu-item">Student
                        <ul className="b-nav__submenu">
                        <Link to="/student"><li className=" b-nav__submenu-item">Show Student</li></Link>
                            
                        <Link to="/student/create"><li className="b-nav__submenu-item">new Student</li></Link>
                        <Link to="/student/add"><li className="b-nav__submenu-item">Add Course</li></Link>
                        </ul>
                    </li>
                    <li className="b-nav__menu b-nav__menu-item">Course
                        <ul className="b-nav__submenu">
                        <Link to="/course"><li className=" b-nav__submenu-item">Show Courses</li></Link>
                        <Link to="/course/create"><li className="b-nav__submenu-item">new rCourse</li></Link>
                        <Link to="/course/add"><li className="b-nav__submenu-item">Add Professor</li></Link>
                        </ul>
                    </li>
                </ul>
                
            </nav>
        </>
    )
}
export default NavbarAdmin;