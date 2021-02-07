import './CreateCourse.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import createProfessorService from '../../api/CourseService'



const CreateCourse = (props) => {

    const [nameState, setName] = useState('');
    // const [hasUser, setHasUser] = useState();
    const [isModalOpen , setModalOpen] = useState(true)
    const handleForm = (event) => {
        
        const {name, value} = event.target;

        if(name ==='name'){
            setName(value);
            console.log(nameState);
        }
    }
         
    const submitForm = async (event) => {
        event.preventDefault();
        const newCourse = {
            name: nameState,
        }
        const data = await createProfessorService(newCourse);
        toggleModal();
     
    }

    const toggleModal = () => {
        setModalOpen(false);
        props.history.push('/course')
    }
    return(
        <>
         <Modal isOpen={isModalOpen}>
            <ModalHeader className="b-modal__header">Create a course</ModalHeader>
            <ModalBody>
            <form className="b-createForm" onSubmit={submitForm}>
                <label>Name: </label>
                    <input
               
                name="name"
                value={nameState}
                onChange={handleForm}/>
           
                <ModalFooter>
                <Button type="submit" color="primary">Accept</Button>
                <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
                 </form>   
   
               </ModalBody>
              </Modal>
        </>
    
    )
}

export default CreateCourse;