import { useState, useEffect} from 'react';
import { allStudents, 
        deleteStudentService,
        getModifyStudentService,
        postModifyStudentService,
        getDetailsStudentService } from '../../api/StudentService'

import StudentCard from './../../components/StudentCard';
import ModifyStudentForm from '../../components/ModifyStudentForm';
import ProfessorDetails from '../../components/StudentDetail';

import './Student.scss';

const Student = (props) => {
    const [listOfStudents, setListOfStudent] = useState();
    const [student, setStudent] = useState();
    const [detailsStudentView, setDetailsStudentView] = useState();

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
        const data = await postModifyStudentService(user)
        setStudent(undefined);
        studentList();
    }

    const detailsStudent = async (id) => {
        const data = await getDetailsStudentService(id);
        debugger
        console.log('data: ' + JSON.stringify(data))
        setDetailsStudentView(data);

    }

    return(
        <>
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
                        <th className="b-table__header">Rol</th>
                        <th className="b-table__header--mod">Modify</th>
                        <th className="b-table__header--del">Delete</th>
                        <th className="b-table__header--shw">Details</th>
                    </tr>
                </thead>
                <tbody className="b-table__list">
                        { listOfStudents && listOfStudents.map(student => {
                            return (
                                
                                        <tr key={student._id}><StudentCard 
                                            student={student}
                                            deleteStudent={deleteStudent}
                                            modifyStudent={modifyStudent}
                                            detailsStudent={detailsStudent}
                                            />
                                        </tr>
                            )})
                        }    
                    
                </tbody>
            </table>
            {student && <div>
                <ModifyStudentForm 
                    student={student}
                    modifiedStudent={modifiedStudent}                        
                    />
            </div>}
            {detailsStudentView && <div>
                <ProfessorDetails
                    detailsStudentView={detailsStudentView}/>
                    
            </div>}
        </>
    )
}
export default Student;