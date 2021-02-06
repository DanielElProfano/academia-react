import { useState, useEffect } from 'react';

import { allProfessors, 
        deleteProfessorService,
        getModifyProfessorService,
        postModifyProfessorService,
        getDetailsProfessorService} from '../../api/ProfessorService';
import ProfessorCard from '../../components/ProfessorCard';
import ModifyProfessorForm from '../../components/ModifyProfessorForm';
import ProfessorDetails from '../../components/ProfessorDetails';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './Professor.scss';


const Professor  = (props) => {

    const [listOfProfessors, setListOfProfessors] = useState();
    const [professor, setProfessor] = useState();
    const [detailsProfesorView, setDetailsProfessorView ] = useState();
    // const [confirmDelete, setConfirmDelete] = useState(false);

    const [isModalOpen , setModalOpen] = useState(false)

    useEffect(() => { //cargar la lista de profesores
        professorList();
    },[])

    const professorList = async() =>{
        try {
            const data = await allProfessors();
            setListOfProfessors(data);
        } catch(error) {
        console.log(error);
        }
    }

    const deleteProfessor = async id  => {
        const data = await deleteProfessorService(id);
        professorList();
    }

    const modifyProfessor = async id => {
        const data = await getModifyProfessorService(id);
        setProfessor(data);
    }

    const modifiedProfessor = async (user) => {
        const data = await postModifyProfessorService(user)
        setProfessor(undefined);
        professorList();
    }
    const detailsProfessor = async (user) => {
       
        const data = await getDetailsProfessorService(user);
        setDetailsProfessorView(data);
        setModalOpen(!isModalOpen);
    }
    const createdProfessor = async (user) => {
        console.log("hola professor");
    }
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    return (
        <>
            <Table Striped className="b-table__container">
                <thead className="b-table__header">
                    <tr>
                        <th className="b-table__header">Image</th>
                        <th className="b-table__header">Name</th>
                        <th className="b-table__header">Lastname</th>
                        <th className="b-table__header">Mail</th>
                        <th className="b-table__header">Age</th>
                        <th className="b-table__header">Education</th>
                        <th className="b-table__header">Course</th>
                        <th className="b-table__header">Role</th>
                      </tr>
                </thead>
                <tbody>
                    {listOfProfessors && listOfProfessors.map(professor => {
                        return (
                            <tr key={professor._id}><ProfessorCard 
                                professor={professor}
                                deleteProfessor={deleteProfessor}
                                modifyProfessor={modifyProfessor}
                                detailsProfessor={detailsProfessor}
                                />
                            </tr>
                        )})
                    } 
                </tbody>   
            </Table>
            
            {professor && <div>
                <ModifyProfessorForm
                    professor={professor}
                    modifiedProfessor={modifiedProfessor} //esta prop recibe el professor modificado
                />
            </div>}
          
            <Modal isOpen={isModalOpen}>
              <ModalHeader> title </ModalHeader>
               <ModalBody>
               {detailsProfesorView && <div>
                        <ProfessorDetails
                            detailsProfesorView={detailsProfesorView}/>
                    
                    </div>}
               
               </ModalBody>
                   
               <ModalFooter>
                <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
                <Button color="secondary">Cancel</Button>
              </ModalFooter>
              </Modal>
          
        </>
       
        )
    }


export default Professor;