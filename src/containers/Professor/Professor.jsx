import { useState, useEffect } from 'react';

import { allProfessors, 
        deleteProfessorService,
        getModifyProfessorService,
        postModifyProfessorService,
        getDetailsProfessorService} from '../../api/ProfessorService';
import ProfessorCard from '../../components/ProfessorCard';
import ModifyProfessorForm from '../../components/ModifyProfessorForm';
import ProfessorDetails from '../../components/ProfessorDetails';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './Professor.scss';


const Professor  = (props) => {

    const [listOfProfessors, setListOfProfessors] = useState();
    const [professor, setProfessor] = useState();
    const [detailsProfesorView, setDetailsProfessorView ] = useState();
    const [modifyModal, setModifyModal] = useState();
    const [confirmDelete, setConfirmDelete] = useState(false);

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
        setModalOpen(!isModalOpen);
        setProfessor(data);
        setModifyModal(true)
    }

    const modifiedProfessor = async (user) => {
        const data = await postModifyProfessorService(user)
        setModalOpen(!isModalOpen);
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
        <div className="b-table">
            <table className="b-table__container">
                <thead className="b-table__headcontainer">
                    <tr>
                        <th className="b-table__header">Image</th>
                        <th className="b-table__header">Name</th>
                        <th className="b-table__header">Lastname</th>
                        <th className="b-table__header">Mail</th>
                        <th className="b-table__header">Age</th>
                       
                        <th className="b-table__header">Course</th>
                        <th className="b-table__header">Role</th>
                        <th></th>
                        <th></th>
                        <th></th>

                      </tr>
                </thead>
                <tbody>
                    {listOfProfessors && listOfProfessors.map(professor => {
                        return (
                            <tr key={professor._id} className="b-table__row"><ProfessorCard 
                                professor={professor}
                                deleteProfessor={deleteProfessor}
                                modifyProfessor={modifyProfessor}
                                detailsProfessor={detailsProfessor}
                                />
                            </tr>
                        )})
                    } 
                </tbody>   
            </table>
            
            <Modal isOpen={isModalOpen}>
              <ModalHeader>{modifyModal ? <span>Mofify</span>:<span>Deatils</span>} </ModalHeader>
               <ModalBody>
               {detailsProfesorView && <div>
                        <ProfessorDetails
                            detailsProfesorView={detailsProfesorView}/>
                    
                    </div>}
                {modifyModal && <div>
                <ModifyProfessorForm
                    professor={professor}
                    modifiedProfessor={modifiedProfessor} //esta prop recibe el professor modificado
                />
            </div>}
               </ModalBody>
                   
               <ModalFooter>
                <Button color="primary" onClick={toggleModal}>Accept</Button>
                {!detailsProfesorView && 
                    <Button color="secundary" onClick={toggleModal}>Cancel</Button>}
                
              </ModalFooter>
              </Modal>
          
        </div>
       
        )
    }


export default Professor;