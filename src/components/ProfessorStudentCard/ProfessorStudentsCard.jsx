import './ProfessorStudentsCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faSms, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const ProfessorStudentsCard = (props) => {
    const { _id, age, lastName, mail, name, photo, faltas} = props.student;
    
    const sendEmail = () =>{
        const studentMail ={
            id: _id,
            mail
        }
        props.sendEmail(studentMail);
    }
    const sms = () =>{
        props.sms(_id);
    }
    const falta = () =>{
        props.falta(_id);
    }
    return(
        <>
            <td className="b-table__content"><img className="b-table__img" src={photo} alt="Student"></img></td>
            <td className="b-table__content">{ name }</td>
            <td className="b-table__content">{ lastName }</td>
            <td className="b-table__content">{ mail }</td>
            <td className="b-table__content">{ age }</td>
            <td className="b-table__content">{ faltas.map(falta => {
                return(
                    <tr key={falta}>{falta}</tr>)}
                )}</td>
            <td className="b-table__icon b-table__icon--mod" onClick={sendEmail}><FontAwesomeIcon icon={faEnvelopeOpen} /></td>
            <td className="b-table__icon b-table__icon--del" onClick={sms}><FontAwesomeIcon icon={faSms} /></td>
            <td className="b-table__icon b-table__icon--dtl" onClick={falta}><FontAwesomeIcon icon={faTimesCircle}/></td>
        </>

    )




}

export default ProfessorStudentsCard;