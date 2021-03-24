import { useEffect, useState } from 'react';
import { allStudents} from '../../api/StudentService';
import { allCourses } from '../../api/CourseService';
import { addStudentService } from '../../api/CourseService';
import AddStdToCourseCard from '../../components/AddStdToCourseCard'
import './AddStdToCourse.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStdToCourse = () => {

        const [listOfStudents, setListOfStudent] = useState();
        const [listOfCourses, setListOfCourses] = useState();
        const [idStudentState, setIdStudent] = useState();
        const [checked, setChecked] = useState();
        const [idCheck, setIdCheck] = useState();
    
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
            const {idCourse, checkId} = idStudent;
            setIdCheck(checkId);
            setIdStudent(idCourse);
            setChecked(true);
        } 
        const onCheckCourse = async (idCourse) => {
            await addStudentService(idStudentState, idCourse,)
            setChecked(false)
            document.getElementById(idCheck).checked = false;
            studentList();
        }

    return(
        <>
        <div className="b-course__title">
            <h2 className="b-course__title"> Select a Student to add to a course</h2>
        </div>
        <div className="b-tableadd__container">
            <table className="b-tableadd__main">
                <thead className="b-tableadd__header">
                    <tr>
                        <th>Select course</th>
                        <th className="b-tableadd__header">Name</th>
                        <th className="b-tableadd__header">LastName</th>
                        <th className="b-tableadd__header">Course</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfStudents && listOfStudents.map((student, index) => {
                        return (
                            <tr  className="b-tableadd__row" key={student._id}><AddStdToCourseCard 
                                student={student}
                                index={index}
                                checked={isChecked}
                                />
                            </tr>
                        )})
                    } 
                </tbody>   
            </table>
            {checked && <table className="b-tableadd__main">
                <thead className="b-tableadd__header">
                    <tr>
                        
                        <th></th>
                        <th className="b-tableadd__header">Select a student</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfCourses && listOfCourses.map(course => {
                        return (
                            <tr className="b-tableadd__row" key={course._id}>
                                <td><label for="check"></label>
                                    <input type="checkbox" id="checkbox" onClick={() => onCheckCourse(course._id)}></input>
                                </td>
                                <td className="b-table__content">{ course.name }</td>
                            </tr>
                        )})
                    } 
                </tbody>   
            </table>}
            </div>
        </>
    )
   }


export default AddStdToCourse;