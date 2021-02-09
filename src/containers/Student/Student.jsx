import { useState, useEffect} from 'react';
import { allStudents, 
        deleteStudentService,
        getModifyStudentService,
        postModifyStudentService,
        getDetailsStudentService } from '../../api/StudentService'

import StudentCard from './../../components/StudentCard';
import ModifyStudentForm from '../../components/ModifyStudentForm';
import ProfessorDetails from '../../components/StudentDetail';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Student.scss';

const Student = (props) => {
    const [listOfStudents, setListOfStudent] = useState();
    const [student, setStudent] = useState();
    const [detailsStudentView, setDetailsStudentView] = useState();
    const [modifyModal, setModifyModal] = useState();
    const [isModalOpen , setModalOpen] = useState(false)

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
        setModifyModal(true)
        setModalOpen(!isModalOpen);
    }

    const modifiedStudent= async (user) => {
        const data = await postModifyStudentService(user)
        debugger
        setModalOpen(!isModalOpen);
        studentList();
        setModifyModal(false)
    }

    const detailsStudent = async (id) => {
        const data = await getDetailsStudentService(id);
        setModifyModal(false)
        setDetailsStudentView(data);
        setModalOpen(!isModalOpen);

    }

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    return(
    <>
        <div className="b-course__title">
            <h2 className="b-course__title">All Students</h2>
        </div>
        <div className="b-table">
            <table className="b-table__container">
                <thead className="b-table__headcontainer">
                    <tr>
                        <th className="b-table__header">Image</th>
                        <th className="b-table__header">Name</th>
                        <th className="b-table__header">Lastname</th>
                        <th className="b-table__header">Mail</th>
                        <th className="b-table__header">Age</th>
                        <th className="b-table__header">Course</th>
                        <th className="b-table__header">Faltas</th>
                        <th className="b-table__header">Rol</th>
                        <th></th>
                        <th></th>
                        <th></th>
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
            <Modal isOpen={isModalOpen}>
              <ModalHeader>{modifyModal ? <span>Mofify</span>:<span>Deatils</span>} </ModalHeader>
               <ModalBody>
               {!modifyModal && detailsStudentView && <div>
                        <ProfessorDetails
                            detailsStudentView={detailsStudentView}/>
                    
                    </div>}
                {modifyModal && <div>
                <ModifyStudentForm
                    student={student}
                    modifiedStudent={modifiedStudent} //esta prop recibe el professor modificado
                />
            </div>}
               </ModalBody>
                   
               <ModalFooter>
               {!modifyModal && <Button color="primary" onClick={toggleModal}>Accept</Button>}
                {modifyModal && 
                    <Button color="secundary" onClick={toggleModal}>Cancel</Button>}
                
              </ModalFooter>
              </Modal>
        </div>
    </>
    )
}
export default Student;