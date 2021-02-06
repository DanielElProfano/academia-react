import './AddStdToCourseCard.scss';
import { useEffect } from 'react';

const AddStdToCourseCard = (props) => {

    const {name, _id, lastName, courses} = props.student;
    useEffect (()=>{
        document.getElementById("myForm").reset();
    },[]);
    
    const onCheck = () => {
        props.checked(_id);
    }
    return(
        <>
        <td>
            <form id="myForm">
                <label for="check"></label>
                <input type="checkbox" onClick={onCheck}></input>
            </form>
        </td>
            <td className="b-table__content">{ name }</td>
            <td className="b-table__content">{ lastName }</td>
            <td className="b-table__content">
            {courses.map(course => {
                return ( 
                        <span key={course._id}>
                        { course.name }, </span>)}
              )}
            </td>
    
        </>  
        
    )
}

export default AddStdToCourseCard;