import './ProfessorDetails.scss';
import { Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfessorDetails = (props) => {
    const { name, lastName, mail, age, photo} = props.detailsProfesorView;

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
    )
}
export default ProfessorDetails ;
