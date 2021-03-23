import { useEffect } from 'react';
import './CourseCardAdd';


const CourseCardAdd = (props) => {

    const {name, _id, professors} = props.course;
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
            <td className="b-table__content">
                {professors.map(professor => {
                return ( 
                    <span key={professor._id}>
                    { professor.name }, </span>)}
                )}
            </td>
        </>  
    )
}

export default CourseCardAdd;