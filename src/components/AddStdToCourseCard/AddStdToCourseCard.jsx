import './AddStdToCourseCard.scss';
import { useEffect } from 'react';

const AddStdToCourseCard = (props) => {

    const {name, _id, lastName, courses} = props.student;

    const onCheck = () => {
        props.checked(_id);
    }

    return(
        <>
        <td>
            <form id="myForm">
                <label for="check"></label>
                <input id = "check" type="checkbox" onClick={onCheck}></input>
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