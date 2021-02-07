const coursesList = 'http://localhost:4000/course/show';
const createCourseURL = 'http://localhost:4000/course/create';
const handleCourseURL = 'http://localhost:4000/course/';
const addProfessor = 'http://localhost:4000/course/addProfessor/';
const addStudent= 'http://localhost:4000/course/addStudent/';

export const allCourses = async() => {
    const request = await fetch(coursesList, {
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

export const deleteProfessorService = async(id) => {
    const request = await fetch(`${handleCourseURL}${id}/delete`, {
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

  const createCourseService = async (course) => {
    const request = await fetch(createCourseURL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      credentials: 'include',
      body: JSON.stringify(course),
  })

  const response = await request.json();
  
  if(!request.ok) {
    return new Error(response.message);
  }

  return response;
}

export const addProfessorService = async(idProf, idCourse) => {
  const request = await fetch(`${addProfessor}${idProf}/${idCourse}`, {
    method: "POST",
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
export const addStudentService = async(idStudent, idCourse) => {
  const request = await fetch(`${addStudent}${idStudent}/${idCourse}`, {
    method: "POST",
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

export default createCourseService