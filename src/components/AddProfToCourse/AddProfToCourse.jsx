import './AddProfToCourse.scss';
import { useEffect, useState } from 'react';
import { allCourses } from '../../api/CourseService';
import { allProfessors } from '../../api/ProfessorService';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseCardAdd from '../CourseCardAdd';
import {addProfessorService} from '../../api/CourseService'

const AddProfToCourse = (props) => {

    const [listOfCourses, setListofCourses] = useState();
    const [listOfProfessors, setListOfProfessors] = useState();
    const [check, setCheck] = useState();
    const [, setDeleteCheck] = useState();
    const [idCourseState, setIdCourseState] = useState();
    const [, setResetForm ] = useState(false);
    const [idCheck, setIdCheck] = useState();
    useEffect(() => {
        
        courseList();
    },[]);

    const courseList = async() => {
        const data = await allCourses();
        const professors = await allProfessors();
       
        setListofCourses(data);
        setListOfProfessors(professors);
     
    }
    const isChecked = (idCourse) => {
        const {checkId, id} = idCourse
        setIdCheck(checkId)
        setIdCourseState(id);
        setCheck(true); // show list of professors
        setDeleteCheck(false);
    } 
    const onCheckProfessor = async (idProf) => {
        await addProfessorService(idProf, idCourseState)
        setCheck(false)
        setResetForm(true)
        courseList();
        document.getElementById(`myForm_check_${idCheck}`).reset();
    }

    return (
        <>
        <div className="b-course__title">
            <h2 className="b-course__title"> Select a professor and add to a course</h2>
        </div>
        <div className="b-tableadd__container">
        <table listOfProfessors={listOfProfessors } className="b-tableadd__main">
            <thead className="b-tableadd__header">
                <tr>
                    <th></th>
                    <th className="b-tableadd__header">Name</th>
                    <th className="b-tableadd__header">Professors</th>
                </tr>
            </thead>
            <tbody>
                {listOfCourses && listOfCourses.map((course, index) => {
                    return (
                        <tr className="b-card__row" id={index} key={course._id}><CourseCardAdd 
                            course={course}
                            index={index}
                            check={isChecked}
                            />
                        </tr>
                    )})
                } 
            </tbody>   
        </table>
        
        {check && <table className="b-tableadd__main">
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
                            <td className="b-table__content">
                                <label for="check"></label>
                                <input className="b-checkbox" type="checkbox" id="checkbox" onClick={() => onCheckProfessor(professor._id)}></input></td>
                            <td className="b-table__content"><p>{ professor.name }</p></td>
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