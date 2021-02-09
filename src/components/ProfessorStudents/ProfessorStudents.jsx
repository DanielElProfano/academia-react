import { useEffect } from 'react';
import { useState } from 'react'
import  './ProfessorStudents.scss';
import { getCoursesProfessorService, 
        getStudentsByCoursesProfessorService,
        } from '../../api/ProfessorService'
import { getFaltaStudentService } from '../../api/StudentService';
import ProfessorStudentList from '../ProfessorStudentCard';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sendingEmail } from '../../api/utils';
import LottieControl from '../lottie';

const ProfessorStudents = (props) => {

    const [professor, setProfessor] = useState();
    const [select, setSelect] = useState();
    const [listOfStudents, setListOfStudents] = useState();
    const [isModalOpen , setModalOpen] = useState(false);
    const [mailState, setMailState] = useState();
    const [, setFrom ] = useState();
    const [, setTo]= useState();
    const [subjectState, setSubject]= useState();
    const [studenState, setStudent] = useState({});
    const [lottie, setLottie] =useState(false);
    const [course, setCourse] = useState();
   

    useEffect(() => { //cargar la lista de profesores
        studentList();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

    const studentList = async() =>{
        try {
            const data = await getCoursesProfessorService(props.logUser._id);
            if(data.courses.length) {
                setProfessor(data)
            }else{
                alert("No tiene cursos agisnados. Avise a su responsable")
            }
        } catch(error) {
            console.log(error);
        }
    }
    const handleSelect = async(event) =>{
        const { value } = event.target
        setSelect(value)
    
    }
    const onSubmitForm = async (event) =>{
        event.preventDefault();
        setCourse(select)
        const data = await getStudentsByCoursesProfessorService(select);
        setListOfStudents(data);
    }

    const sendEmail = (student) =>{
        setStudent(student);
        toggleModal();
    }
  
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    const handleMailForm = (event) => {
        const { name, value } = event.target;
       
        if (name === 'mail'){
            setMailState(value);
        }else if (name === 'to'){
            setTo(value);
        }else if (name === 'from')
        {
            setFrom(value)
        }else if (name === 'subject')
        {
            setSubject(value)
        }
    }       

    const submitEmailForm = async(event) => {
        setLottie(false)
        setModalOpen(!isModalOpen);
        event.preventDefault();
        const newEmail = {
            from : props.logUser.mail,
            to: studenState.mail,
            subject : subjectState,
            text: mailState
        }
        const data = await sendingEmail(newEmail);
        setLottie(true);
    }

    const falta = async (idStd) => {
        const data = await getFaltaStudentService(idStd);
        const data2= await getStudentsByCoursesProfessorService(select);
        setListOfStudents(data2);
    }
    
    return (
    <>
        <div className="b-tablestudent">
            <form onSubmit={onSubmitForm}>
                <label>courses</label>
                <select onChange={handleSelect} name="course">
                {professor && professor.courses.map(course => {
                    return(
                        <option key={course._id} 
                        value={course._id}>{course.name}</option>
                    )}
                )}
                    </select>
                <button type="submit">Select</button>
            </form>
         
        
         { listOfStudents && 

         <table className="b-table__container">
            <thead className="b-table__headcontainer">
                <tr>
                    <th className="b-table__header">Image</th>
                    <th className="b-table__header">Name</th>
                    <th className="b-table__header">Lastname</th>
                    <th className="b-table__header">Mail</th>
                    <th className="b-table__header">Age</th>
                    <th className="b-table__header">Faltas</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="b-table__list">
                    {listOfStudents.map(student => {
                        return (
                            <tr key={student._id}><ProfessorStudentList 
                                student={student}
                                sendEmail={sendEmail}
                                falta={falta}
                                // detailsStudent={detailsStudent}
                                />
                            </tr>
                        )})
                    }    
            </tbody>
        </table>}
        {lottie && <LottieControl></LottieControl>}
        </div>
        <Modal isOpen={isModalOpen}  className="modal-dialog modal-lg">  //modal para el email
            <ModalHeader>send Email to: </ModalHeader>
            <ModalBody>
            <form className="b-form" onSubmit={submitEmailForm} method="POST" enctype="multipart/form-data">
                <label for="from">From: </label>
                <input type="text" 
                    name="name"
                    onChange={handleMailForm} 
                    value={props.logUser.mail}></input>
            
                <label for="to">To: </label>
                <input name="to" 
                        type="text" 
                        onChange={handleMailForm}
                        value={studenState.mail}></input>

                <label for="subject">Subject: </label>
                <input name="subject" 
                        type="text" 
                        onChange={handleMailForm}
                        value={subjectState}></input>
            
                <label for="text">Text: </label>
                <textarea name="mail" 
                    type="text"
                    cols="100"
                    rows="10"
                    onChange={handleMailForm}
                    value={mailState}></textarea>

                <ModalFooter>
                    <Button type="submit" color="primary">Accept</Button>
                    <Button color="secundary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </form>
            </ModalBody>
        </Modal>

    </>   
        
    )
}

export default ProfessorStudents;