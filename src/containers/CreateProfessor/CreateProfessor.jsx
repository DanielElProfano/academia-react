import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateProfessor.scss';
import { createProfessorService } from '../../api/ProfessorService';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { allProfessors } from '../../api/ProfessorService'

const RESET_FORM = {
    name:'',
    lastName:'',
    age: '',
    mail:'',
    photo: {},
   
    subjects: [],
    password: ''
}

const CreateProfessor = (props) => {

    
    const [newProfessor, setNewProfessor] = useState();

    const [isModalOpen , setModalOpen] = useState(true)
    const [nameState, setNameState] = useState('')
    const [lastnameState, setLastnameState] = useState();
    const [ageState, setAgeState] = useState();
    const [mailState, setMailState] = useState();
    const [photoState, setPhoto] = useState(null);
    const [subjectsState, setSubjects] = useState([]);
    const [passwordState, setPassword] = useState();
    const [photoPreview, setPhotoPreview] = useState();

    const handleProfessorForm = (event) => {
        
        const { name, value } = event.target;
       
        if (name === 'mail'){
            setMailState(value);
        }else if (name === 'name'){
            setNameState(value);
        }else if (name === 'age'){
            setAgeState(value)
        }else if (name === 'lastName'){
            setLastnameState(value)
        }else if (name === 'photo'){
            let reader = new FileReader();
            let file = event.target.files[0];
         
            reader.onloadend = () => {
                setPhoto(file)
                setPhotoPreview(reader.result)
                }
                reader.readAsDataURL(file)

                console.log(file)
       
        }else if(name === 'password'){
            setPassword(value)
        }
    }
    
    const submitForm = async(event) => {
        event.preventDefault();
        const form = new FormData();
            form.append('photo', photoState)     
            form.append('name', nameState);
            form.append('lastName', lastnameState);
            form.append('age', ageState);
            form.append('mail', mailState);
            form.append('subjects', subjectsState);
            form.append('password', passwordState);

        const data = await createProfessorService(form);
        toggleModal();
        props.history.push('/professor')
    }
    const toggleModal = () => {
        setModalOpen(false);
        props.history.push('/student')
    }
    
    return(
        <Modal isOpen={isModalOpen}>
        <ModalHeader className="b-modal__header">Create Student</ModalHeader>
        <ModalBody>
        <form className="b-form" onSubmit={submitForm} method="POST" enctype="multipart/form-data">
            <fieldset className="b-form__field">
                <legend>Datos personales</legend>
                {photoPreview && <img className="b-form__"src={photoPreview}></img>}
                <label for="photo">Photo:</label>
                <input type="file" 
                    name="photo"
                    onChange={handleProfessorForm}  
                    accept="image/png, image/jpg, image/jpeg"/>
            
                <label for="name">Name: </label>
                <input type="text" 
                    name="name"
                    onChange={handleProfessorForm} 
                    value={nameState}></input>
            
                <label for="lastName">Lastname: </label>
                <input name="lastName" 
                        type="text" 
                        onChange={handleProfessorForm}
                        value={lastnameState}></input>
            
                <label for="mail">Email: </label>
                <input name="mail" 
                    type="text"
                    onChange={handleProfessorForm}
                    value={mailState}></input>
                
                <label for="age">Age: </label>
                <input name="age" 
                    type="number"
                    onChange={handleProfessorForm}  
                    value={ageState}></input>

                <label for="password">Password</label>
                <input type="password"
                        name="password"
                        onChange={handleProfessorForm}
                        value={passwordState}></input>
                        
            </fieldset>
            <ModalFooter>
            <Button type="submit" color="primary">Accept</Button>
            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
            </ModalFooter>
             </form>   

           </ModalBody>
          </Modal>)
        {/* <div className="">
        {photoPreview && <img src={photoPreview}></img>}
        <form onSubmit={submitForm} method="POST" enctype="multipart/form-data">
            <fieldset>
                <legend>Datos personales</legend>
                    <label for="photo">Photo:</label>
                    <input type="file" 
                        name="photo"
                        onChange={handleProfessorForm}  
                        accept="image/png, image/jpg, image/jpeg"/>
                   
                    <label for="name">Name: </label>
                    <input type="text" 
                        name="name"
                        onChange={handleProfessorForm} 
                        value={nameState}></input>
                
                    <label for="lastName">Lastname: </label>
                    <input name="lastName" 
                            type="text" 
                            onChange={handleProfessorForm}
                            value={lastnameState}></input>
                
                    <label for="mail">Email: </label>
                    <input name="mail" 
                        type="text"
                        onChange={handleProfessorForm}
                        value={mailState}></input>
                    
                    <label for="age">Age: </label>
                    <input name="age" 
                        type="text"
                        onChange={handleProfessorForm}  
                        value={ageState}></input>
                    <label for="password">Password</label>
                    <input type="password"
                            name="password"
                            onChange={handleProfessorForm}
                            value={passwordState}></input>
                            
                    
            </fieldset>
            <input type="submit" onCLick={handleProfessorForm} value="Create"></input>
            <Link to="/professor">Cancel</Link>
        </form>

    </div> */}
    
}



export default CreateProfessor;