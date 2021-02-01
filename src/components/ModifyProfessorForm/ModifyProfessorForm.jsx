import { useState } from 'react';
import { Link } from 'react-router-dom';

import './ModifyProfessorForm.scss';

const RESET_FORM = {
    name:'',
    lastName:'',
    age: '',
    mail:''
}

const ModifyProfessorForm = (props) => {
    const {name, lastName, age, mail} = props.professor;
  
    const [nameState, setNameState] = useState(name)
    const [lastnameState, setLastnameState] = useState(lastName);
    const [ageState, setAgeState] = useState(age);
    const [mailState, setMailState] = useState(mail);
    
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
        }
        console.log(nameState, ageState, mailState, lastnameState)

    }
    const submitForm = (event) => {
        event.preventDefault();
        const isModify = { ...props.professor,
            name : nameState,
            lastName : lastnameState,
            age : ageState,
            mail : mailState
        }
        props.modifiedProfessor(isModify)
    }
    return(
        <div className="">
            <form onSubmit={submitForm} method="POST" enctype="multipart/form-data">
                <fieldset>
                    <legend>Datos personales</legend>
                        <label for="name">Name: </label>
                        <input type="text" 
                            name="name"
                            onChange={handleProfessorForm} value={nameState}></input>
                    
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
                        
                </fieldset>
                <input type="submit" onCLick={handleProfessorForm} value="Modify"></input>
                {/* < href="/professor/show">Cancel</Link> */}
            </form>

        </div>
    )
    
}

export default ModifyProfessorForm;