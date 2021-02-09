import './StudentDetail.scss';

const StudentDetail = (props) => {
    const { name, lastName, mail, age, photo} = props.detailsStudentView;
     
   
    return(
            <div className="">
            <img className="b-detail__img"src={photo} alt={name}></img>
            <form className="b-form__field" method="POST" enctype="multipart/form-data">
            
                <legend>Datos perersonales</legend>
        
                <label for="name">Name: </label>
                <input type="text" 
                    name="name"
                    value={name}></input>
        
                <label for="lastName">Lastname: </label>
                <input name="lastName" 
                    type="text" 
                    value={lastName}></input>
            
                <label for="mail">Email: </label>
                <input name="mail" 
                    type="text"
                    value={mail}></input>
                    
                <label for="age">Age: </label>
                <input name="age" 
                    type="text"
                    value={age}></input>
            </form>
        </div>
        // <div className="b-details">
        //     <div className="b-details__header">
        //         <h1>Details of: {name}</h1>
        //     </div>
        //     <div className="b-details__body">
        //         <div className="b-details__personal">
        //             <img className="b-detail__img"src={photo} alt={name}></img>
        //             <div>
        //                 <span className="b-text__description">Name: </span><span className="b-text__data">{name}</span>
        //                 <span className="b-text__description">Lastname: </span><span className="b-text__data">{lastName}</span>
        //                 <span className="b-text__description">Email: </span><span className="b-text__data">{mail}</span>
        //                 <span className="b-text__description">Birth of date: </span><span className="b-text__data">{age}</span>
        //             </div>
        //         </div>
        //         <div className="b-details__education">
        //         </div>
        //         <div className="b-details__aca">
        //             <span className="b-text__description">Name: </span><span className="b-text__data">{name}</span>
        //             <span className="b-text__description">Lastname: </span><span className="b-text__data">{lastName}</span>
        //             <span className="b-text__description">Email: </span><span className="b-text__data">{mail}</span>
        //             <span className="b-text__description">Birth of date: </span><span className="b-text__data">{age}</span>
                    
        //       </div>
        //   </div>
        // </div>
    )

}

export default  StudentDetail;
    ;