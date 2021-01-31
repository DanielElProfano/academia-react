const professorList = 'http://localhost:4000/professor/show';
const deleteProf = 'http://localhost:4000/professor/';


export const allProfessors = async() => {
    
    const request = await fetch(professorList, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      credentials: 'include',
      
    })
    
    const response = await request.json();
    if(!request.ok) {
      return new Error(response.message);
    }
    return response;
  }
  export const deleteProfessorService = async(id) => {
    debugger
    const request = await fetch(`${deleteProf}${id}/delete`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      credentials: 'include',
      
    })
    
    const response = await request.json();
    if(!request.ok) {
      return new Error(response.message);
    }
    return response;
  }

  export const modifyProfessorService = async id => {
 
    const request = await fetch(`${deleteProf}${id}/modify`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      credentials: 'include',
      body: JSON.stringify(),
    })
    const response = await request.json();
    if(!request.ok) {
      return new Error(response.message);
    }
  
    return response;
  }