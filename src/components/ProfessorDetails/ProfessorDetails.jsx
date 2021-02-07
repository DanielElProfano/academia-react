import './ProfessorDetails.scss';

const ProfessorDetails = (props) => {
    const { name, lastName, education, mail, age, photo, rol, subjects, courses} = props.detailsProfesorView;

    let options = [];
    education.forEach((element, index) => {
      options.push(
        <option 
          key={index} 
          value={element}
        >
          {element}
        </option>
      );
     
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

export default ProfessorDetails ;
