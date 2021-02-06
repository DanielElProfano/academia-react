import './StudentCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faInfo, faTable} from '@fortawesome/free-solid-svg-icons';

const StudentCard = (props) => {
    const { _id, age, courses, lastName, mail, name, photo, rol, subjects} = props.student;

    const deleteStudent = () =>{
        props.deleteStudent(_id);
    }
    const modifyStudent = () =>{
        props.modifyStudent(_id);
    }
    const detailsStudent = () =>{
        props.detailsStudent(_id);
    }
    return(
        <>
            <td className="b-table__content"><img className="b-table__img" src={photo} alt="Student"></img></td>
            <td className="b-table__content">{ name }</td>
            <td className="b-table__content">{ lastName }</td>
            <td className="b-table__content">{ mail }</td>
            <td className="b-table__content">{ age }</td>
            <td className="b-table__content">{ courses[0].name }</td>
            <td className="b-table__content">{ subjects }</td>
            <td className="b-table__content">{ rol }</td>
            <td classname="b-table__content--icon" onClick={modifyStudent}><FontAwesomeIcon icon={faTable} /></td>
            <td classname="b-table__content--icon" onClick={deleteStudent}><FontAwesomeIcon icon={faTrash} /></td>
            <td classname="b-table__content--icon" onClick={detailsStudent}><FontAwesomeIcon icon={faInfo}/></td>
        </>

    )




}

export default StudentCard;