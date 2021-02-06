import './AddStdToCourse.scss';
import { allStudents} from '../../api/StudentService';
import { allCourses } from '../../api/CourseService';
import { addStudentService } from '../../api/CourseService';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';
import AddStdToCourseCard from '../../components/AddStdToCourseCard'

const AddStdToCourse = () => {

        const [listOfStudents, setListOfStudent] = useState();
        const [listOfCourses, setListOfCourses] = useState();
        const [student, setStudent] = useState();
        const [detailsStudentView, setDetailsStudentView] = useState();
        const [idStudentState, setIdStudent] = useState();
        const [checked, setChecked] = useState();
    
        useEffect(() => { //cargar la lista de profesores
            studentList();
       },[])
    
        const studentList = async() =>{
            try {
                const data = await allStudents();
                const courses = await allCourses();
                setListOfStudent(data);
                setListOfCourses(courses);
            } catch(error) {
            console.log(error);
            }
        }

        const isChecked = (idStudent) => {
          
            setIdStudent(idStudent);
            setChecked(true);
        } 
        const onCheckCourse = async (idCourse) => {
            debugger
            const data = await addStudentService(idStudentState, idCourse,)
            setChecked(false)
            document.getElementById("myForm").reset();
            studentList();
            
    
        }

    return(
        <>
      
        <Table listOfStudents={ listOfStudents } Striped className="b-table__container">
            <thead className="b-table__header">
                <tr>
                    <th className="b-table__header">Name</th>
                    <th className="b-table__header">LastName</th>
                    <th className="b-table__header">Course</th>
                </tr>
            </thead>
            <tbody>
                {listOfStudents && listOfStudents.map(student => {
                    return (
                        <tr key={student._id}><AddStdToCourseCard 
                            student={student}
                            checked={isChecked}
                           
                            />
                        </tr>
                    )})
                } 
            </tbody>   
        </Table>
        {checked && <Table>
            <thead className="b-table__header">
                <tr>
                    <th className="b-table__header">Name</th>
                </tr>
            </thead>
            <tbody>
                {listOfCourses && listOfCourses.map(course => {
                    return (
                        <tr key={course._id}>
                            <td><label for="check"></label>

                            <input type="checkbox" id="checkbox" onClick={() => onCheckCourse(course._id)}></input></td>
                            <td className="b-table__content">{ course.name }</td>
                           
                            
                        </tr>
                    )})
                } 
            </tbody>   

        </Table>}
        </>
    )
   }


export default AddStdToCourse;