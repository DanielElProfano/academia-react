import './AddStdToCourseCard.scss';
import { useEffect } from 'react';

const AddStdToCourseCard = (props) => {

    const {name, _id, lastName, courses} = props.student;

    const onCheck = (event) => {
        const {id} = event.target;
        const courseId = {
            idCourse: _id,
            checkId: id
        }
        props.checked(courseId);
    }

    return(
        <>
        <td>
            <form id="myForm">
                <label for="check"></label>
                <input className="b-checkbox" id = {`check_course_id_${props.index}`} type="checkbox" onClick={onCheck}></input>
            </form>
        </td>
            <td className="b-table__content">{ name }</td>
            <td className="b-table__content">{ lastName }</td>
            <td className="b-table__content">
            {courses.map(course => {
                return ( 
                        <tr key={course._id}>
                        { course.name }, </tr>)}
              )}
            </td>
        </>  
    )
}

export default AddStdToCourseCard;