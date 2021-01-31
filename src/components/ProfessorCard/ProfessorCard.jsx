
import './ProfessorCard.scss'

const ProfessorCard = (props) => {
    const { _id, age, education, lastName, mail, name, photo, rol, subjects} = props.professor;

    const deleteProfessor = () =>{
        props.deleteProfessor(_id);
    }
    const modifyProfessor = () =>{
        props.modifyProfessor(_id);
    }
    return(
        <div className="b-table">
           <table className="b-table__container">
                <tr className="b-table__header">
                    <th className="b-table__header">Image</th>
                    <th className="b-table__header">Name</th>
                    <th className="b-table__header">Lastname</th>
                    <th className="b-table__header">Mail</th>
                    <th className="b-table__header">Age</th>
                    <th className="b-table__header">Education</th>
                    <th className="b-table__header">Course</th>
                    <th className="b-table__header--mod">Modify</th>
                    <th className="b-table__header--del">Delete</th>
                    <th className="b-table__header--shw">Details</th>
                </tr>

                
                <tr>
                    <td className="b-table__content"><img className="b-table__img" src={photo} alt="Professor"></img></td>
                    <td className="b-table__content">{ name }</td>
                    <td className="b-table__content">{ lastName }</td>
                    <td className="b-table__content">{ mail }</td>
                    <td className="b-table__content">{ education }</td>
                    <td className="b-table__content">{ age }</td>
                    <td className="b-table__content">{ subjects }</td>
                    <td className="b-table__content">{ rol }</td>
                    <td onClick={modifyProfessor}>modify</td>
                    <td onClick={deleteProfessor}>delete</td>
                    <td><a href="/professor/{{this._id}}/students">detail</a></td>
                
     
                </tr>
                

            </table>    
        </div>
    )
}

export default ProfessorCard;