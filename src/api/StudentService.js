const studentList = 'http://localhost:4000/student/show';
const handleStudentURL = 'http://localhost:4000/student/';


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
    console.log(response)
    if(!request.ok) {
      return new Error(response.message);
    }
    return response;
  }
  export const deleteStudentService = async(id) => {
    debugger
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