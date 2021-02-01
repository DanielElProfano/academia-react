import './StudentCard.scss';

const StudentCard = (props) => {
    const { _id, age, courses, lastName, mail, name, photo, rol, subjects} = props.student;

    const deleteStudent = () =>{
        props.deleteStudent(_id);
    }
    const modifyStudent = () =>{
        props.modifyStudent(_id);
    }
    return(

        <div className="b-table">
           <table className="b-table__container">
                <thead className="b-table__header">
                    <tr>
                        <th className="b-table__header">Image</th>
                        <th className="b-table__header">Name</th>
                        <th className="b-table__header">Lastname</th>
                        <th className="b-table__header">Mail</th>
                        <th className="b-table__header">Age</th>
                        <th className="b-table__header">Course</th>
                        <th className="b-table__header">Faltas</th>
                        <th className="b-table__header--mod">Modify</th>
                        <th className="b-table__header--del">Delete</th>
                        <th className="b-table__header--shw">Details</th>
                    </tr>
                </thead>

                
                <tbody>
                    <tr>
                        <td className="b-table__content"><img className="b-table__img" src={photo} alt="Student"></img></td>
                        <td className="b-table__content">{ name }</td>
                        <td className="b-table__content">{ lastName }</td>
                        <td className="b-table__content">{ mail }</td>
                        <td className="b-table__content">{ age }</td>
                       
                        <td className="b-table__content">{ courses[0].name }</td>
                        <td className="b-table__content">{ subjects }</td>
                        <td className="b-table__content">{ rol }</td>
                        <td onClick={modifyStudent}>modify</td>
                        <td onClick={deleteStudent}>delete</td>
                        <td><a href="/professor/{{this._id}}/students">detail</a></td>
                    </tr> 
     
                </tbody>
                

            </table>    
        </div>


    )




}

export default StudentCard;