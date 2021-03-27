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
        setModifyModal(true);
        setProfessor(data);
        setModalOpen(!isModalOpen);
        
    }

    const modifiedProfessor = async (user) => {
        const data = await postModifyProfessorService(user);
        setModalOpen(!isModalOpen);
        professorList();
        setModifyModal(false);
    }

    const detailsProfessor = async (user) => {
        const data = await getDetailsProfessorService(user);
        setModifyModal(false)
        setDetailsProfessorView(data);
        setModalOpen(!isModalOpen);
    }
   
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    return (
    <div className="b-margin__top">
        <div className="b-professor__title">
            <h2 className="b-professor__title">All Professor</h2>
        </div>
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
                    {listOfProfessors && listOfProfessors.map((professor, index) => {
                        return (
                            <tr key={professor._id} className="b-table__row"><ProfessorCard 
                                professor={professor}
                                index={index}
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
                <ModalHeader>{modifyModal ? <span>Mofify</span>:<span>Details</span>} </ModalHeader>
                <ModalBody>
                {!modifyModal && detailsProfesorView && <div>
                    <ProfessorDetails detailsProfesorView={detailsProfesorView}/>
                    
                    </div>}
                {modifyModal && <div>
                <ModifyProfessorForm
                professor={professor}
                modifiedProfessor={modifiedProfessor} //esta prop recibe el professor modificado
                />
            </div>}
               </ModalBody>
               <ModalFooter>
                {!modifyModal && <Button color="primary" onClick={toggleModal}>Accept</Button>}
                {modifyModal && 
                    <Button color="secundary" onClick={toggleModal}>Cancel</Button>}
                
              </ModalFooter>
              </Modal>
          
        </div>
     </div>   
       
        )
    }


export default Professor;