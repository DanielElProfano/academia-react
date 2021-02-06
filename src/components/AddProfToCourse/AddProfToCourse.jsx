import './AddProfToCourse.scss';
import { useEffect, useState } from 'react';
import { allCourses } from '../../api/CourseService';
import { allProfessors } from '../../api/ProfessorService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';
import CourseCardAdd from '../CourseCardAdd';
import {addProfessorService} from '../../api/CourseService'

const AddProfToCourse = (props) => {

    const [listOfCourses, setListofCourses] = useState();
    const [listOfProfessors, setListOfProfessors] = useState();
    const [checked, setChecked] = useState();
    const [idCourseState, setIdCourseState] = useState();
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
        document.getElementById("myForm").reset();
        courseList();
        

    }

    return (
        <>
        <Table listOfProfessors={listOfProfessors } Striped className="b-table__container">
            <thead className="b-table__header">
                <tr>
                    <th className="b-table__header">Name</th>
                    <th className="b-table__header">Professors</th>
                </tr>
            </thead>
            <tbody>
                {listOfCourses && listOfCourses.map(course => {
                    return (
                        <tr key={course._id}><CourseCardAdd 
                            course={course}
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

        </Table>}
        </>
    
    )
}

export default AddProfToCourse;