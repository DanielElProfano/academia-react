const studentList = 'http://localhost:4000/student/show';
const handleStudentURL = 'http://localhost:4000/student/';
const newStudentURL= 'http://localhost:4000/student/create'

// const studentList = 'https://academy-react.herokuapp.com/student/show';
// const handleStudentURL = 'https://academy-react.herokuapp.com/student/';
// const newStudentURL= 'https://academy-react.herokuapp.com/student/create';

export const allStudents = async() => {
    
    const request = await fetch(studentList, {
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
  export const deleteStudentService = async(id) => {
    const request = await fetch(`${handleStudentURL}${id}/delete`, {
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

  export const getModifyStudentService = async id => {
    const request = await fetch(`${handleStudentURL}${id}/modify`, {
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

  export const postModifyStudentService = async student => {
    const request = await fetch(`${handleStudentURL}/modify`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    credentials: 'include',
    body: JSON.stringify(student),
    })
    const response = await request.json();
    if(!request.ok) {
      return new Error(response.message);
    }
  return response;
}
export const getDetailsStudentService = async id => {
  const request = await fetch(`${handleStudentURL}${id}/modify`,  { 
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
export const createStudentService = async student => {
  const request = await fetch(newStudentURL, {
    method: "POST",
    headers: {
      "Accept": "*",
      "Access-Control-Allow-Origin": "*",
    },
    credentials: 'include',
    body: student
})

const response = await request.json();
if(!request.ok) {
  return new Error(response.message);
}
return response;
}

export const getFaltaStudentService = async id => {
  const request = await fetch(`${handleStudentURL}${id}/falta`,  { 
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