import { useState } from 'react';
import './ModifyStudentForm.scss';

const RESET_FORM = {
    name:'',
    lastName:'',
    age: '',
    mail:''
}

const ModifyStudentForm = (props) => {
    const {name, lastName, age, mail} = props.student;
  
    const [nameState, setNameState] = useState(name)
    const [lastnameState, setLastnameState] = useState(lastName);
    const [ageState, setAgeState] = useState(age);
    const [mailState, setMailState] = useState(mail);
    
    const handleStudentForm = (event) => {
        
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
        const isModify = { ...props.student,
            name : nameState,
            lastName : lastnameState,
            age : ageState,
            mail : mailState
        }
        props.modifiedStudent(isModify)
    }
    return(
        <div className="">
            <form onSubmit={submitForm} method="POST" enctype="multipart/form-data">
                <fieldset>
                    <legend>Datos personales</legend>
                        <label for="name">Name: </label>
                        <input type="text" 
                            name="name"
                            onChange={handleStudentForm} value={nameState}></input>
                    
                        <label for="lastName">Lastname: </label>
                        <input name="lastName" 
                                type="text" 
                                onChange={handleStudentForm}
                                value={lastnameState}></input>
                    
                        <label for="mail">Email: </label>
                            <input name="mail" 
                                type="text"
                                onChange={handleStudentForm}
                                value={mailState}></input>
                        
                        <label for="age">Age: </label>
                            <input name="age" 
                                type="text"
                                onChange={handleStudentForm}  
                                value={ageState}></input>
                        
                </fieldset>
                <input type="submit" onCLick={handleStudentForm} value="Modify"></input>
                {/* < href="/professor/show">Cancel</Link> */}
            </form>

        </div>
    )
}

export default ModifyStudentForm;