import './CourseCardAdd';

const CourseCardAdd = (props) => {

    const {name, _id, professors} = props.course;

    const onCheck = (event) => {
        const {id} = event.target;
        const selected = {
            id: _id,
            checkId: id
        }
        props.check(selected);
    }

    return(
        <>  
            <td className="b-table__content">
                <form id={`myForm_check_${props.index}`}>
                    <label for="check"></label>
                    <input
                        id = {props.index}
                        className="b-checkbox" 
                        type="checkbox" 
                        onClick={onCheck}>
                    </input>
                </form>
            </td>
            <td className="b-table__content">{ name }</td>
            <td className="b-table__content">
                {professors.map(professor => {
                return ( 
                    <p key={professor._id}>
                    { professor.name }</p>)}
                )}
            </td>
        </>  
    )
}

export default CourseCardAdd;