import NavbarAdmin from '../Navbar/NavbarAdmin';

import './Header.scss';


const NavbarUser = () => <div>USER</div>
const NavbarProfessor = () => <div>PROFESSOR</div>

const getNavbar = role => {
    if (role === 'admin') return <NavbarAdmin />
    if (role === 'user') return <NavbarUser />
    if (role === 'professor') return <NavbarProfessor />
}

const Header = (props) => {  //navBar

    return(
        <div className="b-header">
            <div className="b-header__left">
                <span>ACADEMIA</span>
            </div><p>Hello {props.user.name}</p>
            {getNavbar(props.user.rol)}
                    
        </div>
    )
}

export default Header;