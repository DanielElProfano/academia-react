import { useState, useEffect } from 'react';
import { allProfessors, 
        deleteProfessorService,
        getModifyProfessorService,
        postModifyProfessorService} from '../../api/ProfessorService';
import ProfessorCard from '../../components/ProfessorCard';
import ModifyProfessorForm from '../../components/ModifyProfessorForm';

import './Professor.scss';

const Professor  = () => {

    const [listOfProfessors, setListOfProfessors] = useState();
    const [professor, setProfessor] = useState();

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

    const deleteProfessor = async id => {
        const data = await deleteProfessorService(id);
        window.location.reload();
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

    return (
        <div className="b-table">
            <ul className="b-table__list">
                {listOfProfessors && listOfProfessors.map(professor => {
                    return (
                        <li key={professor._id}><ProfessorCard 
                            professor={professor}
                            deleteProfessor={deleteProfessor}
                            modifyProfessor={modifyProfessor}
                            />
                        </li>
                    )})
                }    
            </ul>
            {professor && <div>
                <ModifyProfessorForm
                    professor={professor}
                    modifiedProfessor={modifiedProfessor} //esta prop recibe el professor modificado
                />
            </div>}
        </div>
        )
    }


export default Professor;