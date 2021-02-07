const professorList = 'http://localhost:4000/professor/show';
const handleProfessorURL = 'http://localhost:4000/professor/';
const newProfessorURL = 'http://localhost:4000/professor/create';

let GET = {   method: "GET",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  credentials: 'include',
  body: JSON.stringify(),
}



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
    
    const request = await fetch(`${handleProfessorURL}${id}/delete`, {
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

  export const getModifyProfessorService = async id => {
    const request = await fetch(`${handleProfessorURL}${id}/modify`, {
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

  export const postModifyProfessorService = async professor => {
    const request = await fetch(`${handleProfessorURL}/modify`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    credentials: 'include',
    body: JSON.stringify(professor),
    })
    const response = await request.json();
    if(!request.ok) {
      return new Error(response.message);
    }
  return response;
}
  export const getDetailsProfessorService = async id => {

    const request = await fetch(`${handleProfessorURL}${id}/modify`,  { 
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

  export const createProfessorService = async professor => {
    debugger
    const request = await fetch(newProfessorURL, {
      method: "POST",
      headers: {
        "Accept": "*",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: 'include',
      body: professor
  })

  const response = await request.json();
  debugger
  if(!request.ok) {
    return new Error(response.message);
  }

  return response;
}