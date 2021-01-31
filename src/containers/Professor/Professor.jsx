import { useState, useEffect } from 'react';
import { allProfessors, 
        deleteProfessorService,
        modifyProfessorService} from '../../api/ProfessorService';
import ProfessorCard from '../../components/ProfessorCard';
import ModifyProfessorForm from '../../components/ModifyProfessorForm';

import './Professor.scss';

const Professor  = () => {

    const [listOfProfessors, setListOfProfessors] = useState();
    const [canModify, setCanModify] = useState(false);

    useEffect(() => { //cargar la lista de profesores
        professorList();
   },[])

    const professorList = async() =>{
        try {
        const data = await allProfessors();
           
        setListOfProfessors(data);
        console.log(listOfProfessors)
        } catch(error) {
        console.log(error);
        }
    }
    const deleteProfessor = async id => {
        const data = await deleteProfessorService(id);
        window.location.reload();
    }
    const modifyProfessor = async id => {
       
        const data = await modifyProfessorService(id);
        setCanModify(true);
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
            {canModify && <div>
                <ModifyProfessorForm/>
            </div>}
          

          
        </div>

        )
    }


export default Professor;