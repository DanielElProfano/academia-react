import './StudentDetail.scss';

const StudentDetail = (props) => {
    const { name, lastName, mail, age, photo, rol, courses} = props.detailsStudentView;
    console.log("cursos: "+ courses)
  
    let options = [...courses];
    // let options = courses.splice(courses.length-1,1);
    console.log("cursos: object:  "+ options)
    options.forEach((element, index) => {
    
        options.push(
            <option 
                key={index} 
                value={element._id}
                >
                {element.name}
            </option>
        );
    debugger
    });
    return(
        <div className="b-details">
            <div className="b-details__header">
                <h1>Details of: {name}</h1>
            </div>
            <div className="b-details__body">
                <div className="b-details__personal">
                    <img className="b-detail__img"src={photo} alt={name}></img>
                    <div>
                        <span className="b-text__description">Name: </span><span className="b-text__data">{name}</span>
                        <span className="b-text__description">Lastname: </span><span className="b-text__data">{lastName}</span>
                        <span className="b-text__description">Email: </span><span className="b-text__data">{mail}</span>
                        <span className="b-text__description">Birth of date: </span><span className="b-text__data">{age}</span>
                    </div>
                </div>
                <div className="b-details__education">
                </div>
                <div className="b-details__aca">
                    <span className="b-text__description">Name: </span><span className="b-text__data">{name}</span>
                    <span className="b-text__description">Lastname: </span><span className="b-text__data">{lastName}</span>
                    <span className="b-text__description">Email: </span><span className="b-text__data">{mail}</span>
                    <span className="b-text__description">Birth of date: </span><span className="b-text__data">{age}</span>
                    <select> {options }</select>
                </div>
            </div>
        </div>
    )

}

export default  StudentDetail;
    ;