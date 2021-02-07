import './StudentCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faInfo, faTable} from '@fortawesome/free-solid-svg-icons';

const StudentCard = (props) => {
    const { _id, age, courses, lastName, mail, name, photo, rol} = props.student;

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
            <td className="b-table__content">
            {courses.map(course => {
                return ( 
                        <span key={course._id}>
                        { course.name }, </span>)}
              )}
            </td>
            <td></td>
            <td className="b-table__content">{ rol }</td>
            <td className="b-table__icon b-table__icon--mod" onClick={modifyStudent}><FontAwesomeIcon icon={faTable} /></td>
            <td className="b-table__icon b-table__icon--del" onClick={deleteStudent}><FontAwesomeIcon icon={faTrash} /></td>
            <td className="b-table__icon b-table__icon--dtl" onClick={detailsStudent}><FontAwesomeIcon icon={faInfo}/></td>
        </>

    )




}

export default StudentCard;