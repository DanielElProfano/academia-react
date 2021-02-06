import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faInfo, faTable} from '@fortawesome/free-solid-svg-icons';
import './ProfessorCard.scss'

const ProfessorCard = (props) => {
    const { _id, age, education, lastName, mail, name, photo, rol, subjects} = props.professor;

    const deleteProfessor = () =>{
        props.deleteProfessor(_id);
    }
    const modifyProfessor = () =>{
        props.modifyProfessor(_id);
    }
    const detailsProfessor = () => {
        props.detailsProfessor(_id);
    }
    return(
       <>
            <td className="b-table__content"><img className="b-table__img" src={photo} alt="Professor"></img></td>
            <td className="b-table__content">{ name }</td>
            <td className="b-table__content">{ lastName }</td>
            <td className="b-table__content">{ mail }</td>
            <td className="b-table__content">{ education }</td>
            <td className="b-table__content">{ age }</td>
            <td className="b-table__content">{ subjects }</td>
            <td className="b-table__content">{ rol }</td>
            <td className="b-table__icon b-table__icon--mod" onClick={modifyProfessor}><FontAwesomeIcon icon={faTable} /></td>
            <td className="b-table__icon b-table__icon--del" onClick={deleteProfessor}><FontAwesomeIcon icon={faTrash} /></td>
            <td className="b-table__icon b-table__icon--dtl" onClick={detailsProfessor}><FontAwesomeIcon icon={faInfo}/></td>
        </>  
    )
}

export default ProfessorCard;