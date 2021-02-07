const utilsURL= 'http://localhost:4000/utils'


export const sendingEmail = async (email) => {
  
    const request = await fetch(`${utilsURL}/mail`,  { 
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    credentials: 'include',
    body: JSON.stringify(email),
    })
    debugger
    const response = await request.json();
    if(!request.ok) {
      return new Error(response.message);
    }
    return response;
  }