import { useState } from 'react';
import { Button, Col, Form, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './ModifyProfessorForm.scss';

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
             <Form onSubmit={submitForm} method="POST" enctype="multipart/form-data">
            
                <legend>Datos personales</legend>
                <Row>
                    <Col>
                        <label for="name">Name: </label>
                        <input type="text" 
                            name="name"
                            onChange={handleProfessorForm} value={nameState}></input>
                    </Col>
                    <Col>
                        <label for="lastName">Lastname: </label>
                        <input name="lastName" 
                            type="text" 
                            onChange={handleProfessorForm}
                            value={lastnameState}></input>
                    </Col>
                </Row>
                <Row>   
                    <Col>   
                        <label for="mail">Email: </label>
                        <input name="mail" 
                            type="text"
                            onChange={handleProfessorForm}
                            value={mailState}></input>
                    </Col>
                     <Col>      
                        <label for="age">Agedfdfg: </label>
                        <input name="age" 
                            type="text"
                            onChange={handleProfessorForm}  
                            value={ageState}></input>
                    </Col>
                        
                </Row>
                <Button type="submit" color="primary" onCLick={handleProfessorForm} value="Modify">Accept</Button>
              
            </Form>
            {/* <form onSubmit={submitForm} method="POST" enctype="multipart/form-data">
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
                <Button type="submit" color="primary" onCLick={handleProfessorForm} value="Modify">Accept</Button>
              
            </form> */}
        </div>
    )
}

export default ModifyProfessorForm;