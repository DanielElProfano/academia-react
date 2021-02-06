import './CourseCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faInfo, faTable} from '@fortawesome/free-solid-svg-icons';

const CourseCard = (props) => {

    const { _id, age, education, lastName, mail, name, photo, rol, subjects} = props.course;

    const deleteCourse = () => {
        props.deleteCourse(_id);
    }
    return(
        <>
        <td className="b-table__content">{ name }</td>
        <td className="b-table__icon b-table__icon--del" onClick={deleteCourse}><FontAwesomeIcon icon={faTrash} /></td>
    
    </>  
    )
}

export default CourseCard;