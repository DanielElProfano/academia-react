import { useState, useEffect} from 'react';
import { allStudents, 
        deleteStudentService,
        getModifyStudentService,
        postModifyStudentService } from '../../api/StudentService'

import './Student.scss';
import StudentCard from './../../components/StudentCard';
import ModifyStudentForm from '../../components/ModifyStudentForm';


const Student = (props) => {
    const [listOfStudents, setListOfStudent] = useState();
    const [student, setStudent] = useState();

    useEffect(() => { //cargar la lista de profesores
        studentList();
   },[])

    const studentList = async() =>{
        try {
            const data = await allStudents();
            setListOfStudent(data);
        } catch(error) {
        console.log(error);
        }
    }

    const deleteStudent = async id => {
        const data = await deleteStudentService(id);
        window.location.reload();
    }
    const modifyStudent = async id => {
       
        const data = await getModifyStudentService(id);
        setStudent(data);
    }

    const modifiedStudent= async (user) => {
        debugger
        const data = await postModifyStudentService(user)
        setStudent(undefined);
        studentList();
    }




    return(
        <div className="b-table">
            <ul className="b-table__list">
                { listOfStudents && listOfStudents.map(student => {
                    return (
                        <li key={student._id}><StudentCard 
                            student={student}
                            deleteStudent={deleteStudent}
                            modifyStudent={modifyStudent}
                            />
                        </li>
                    )})
                }    
            </ul>
            {student && <div>
                <ModifyStudentForm 
                    student={student}
                    modifiedStudent={modifiedStudent}                        
                    />
            </div>}
          

          
        </div>
    )
}
export default Student;