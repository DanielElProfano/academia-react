import './CreateCourse.scss';
import { FormGroup, InputGroup,InputGroupAddon, InputGroupText,Input, Label, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import createProfessorService from '../../api/CourseService'



const CreateCourse = () => {

    const [nameState, setName] = useState('');
    const [selectState, setSelect] = useState([]);
    const [hasUser, setHasUser] = useState();

    const handleForm = (event) => {
        
        const {name, value} = event.target;

        if(name ==='name'){
            setName(value);
            console.log(nameState);
        }
    }
    // const handleSelect = async (event) => {
        
    //     event.preventDefault();
    //     const addSubject = {
    //         subject = 
    //     }
    // }
        
    const submitForm = async (event) => {
        event.preventDefault();
        const newCourse = {
            name: nameState,
        }
        const data = await createProfessorService(newCourse);
        setHasUser(true);
     
    }
    return(
        <>
           <form className="b-createForm" onSubmit={submitForm}>
                <label>Name: </label>
                    <input
               
                name="name"
                value={nameState}
                onChange={handleForm}
                />
                <Button type="submit">Accept</Button>
            </form>

           {/* {hasUser && <form className="b-createForm__select" onSubmi={handleSelect}>
                <select value={selectState} name="subjects" >
                    <option value='React'>React</option>
                    <option value='Node'>Node</option>
                    <option value='Angular'>Angular</option>
                    <option value='Vanilla JS'>Vanilla JS</option>
                </select> 
                <Button type="submit">Accept</Button>
            </form>} */}
            
        </>
    
    )
}

export default CreateCourse;