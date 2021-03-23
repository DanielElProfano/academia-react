import './AddProfToCourse.scss';
import { useEffect, useState } from 'react';
import { allCourses } from '../../api/CourseService';
import { allProfessors } from '../../api/ProfessorService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import CourseCardAdd from '../CourseCardAdd';
import {addProfessorService} from '../../api/CourseService'

const AddProfToCourse = (props) => {

    const [listOfCourses, setListofCourses] = useState();
    const [listOfProfessors, setListOfProfessors] = useState();
    const [checked, setChecked] = useState();
    const [idCourseState, setIdCourseState] = useState();
    const [resetForm, setResetForm ] = useState(false);
    useEffect(() => {
        
        courseList();
    },[]);


    const courseList = async() => {
        const data = await allCourses();
        const professors = await allProfessors();
       
        setListofCourses(data);
        setListOfProfessors(professors)
     
    }
    const isChecked = (idCourse) => {
        
        setIdCourseState(idCourse);
        setChecked(true);
    } 
    const onCheckProfessor = async (idProf) => {
        const data = await addProfessorService(idProf, idCourseState)
        setChecked(false)
        debugger
        setResetForm(true)
        courseList();
    }

    return (
        <>
        <div className="b-course__title">
            <h2 className="b-course__title"> Select a professor and add to a course</h2>
        </div>
        <div className="b-tableadd__container">
        <table listOfProfessors={listOfProfessors } Striped className="b-tableadd__main">
            <thead className="b-tableadd__header">
                <tr>
                    <th></th>
                    <th className="b-tableadd__header">Name</th>
                    <th className="b-tableadd__header">Professors</th>
                </tr>
            </thead>
            <tbody>
                {listOfCourses && listOfCourses.map(course => {
                    return (
                        <tr id="checkprofessorform" key={course._id}><CourseCardAdd 
                            course={course}
                            checked={isChecked}
                            resetForm={resetForm}
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
                    <th className="b-tableadd__header">Name</th>
                </tr>
            </thead>
            <tbody>
                {listOfProfessors && listOfProfessors.map(professor => {
                    return (
                        <tr key={professor._id}>
                            <td><label for="check"></label>
                            <input type="checkbox" id="checkbox" onClick={() => onCheckProfessor(professor._id)}></input></td>
                            <td className="b-table__content">{ professor.name }</td>
                        </tr>
                    )})
                } 
            </tbody>   
        </table>}
        </div>
        </>
    
    )
}

export default AddProfToCourse;