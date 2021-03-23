const utilsURL= 'http://localhost:4000/utils'
// const utilsURL= 'https://academy-react.herokuapp.com/utils'

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
    const response = await request.json();
    if(!request.ok) {
      debugger
      return new Error(response.message);
    }
    return response;
  }