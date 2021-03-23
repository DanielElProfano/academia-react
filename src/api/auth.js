const loginUrl = "http://localhost:4000/login";
const checkSessionUrl = "http://localhost:4000/login/checkSession";
const logoutUrl = "http://localhost:4000/login/logout";

// const loginUrl = "https://academy-react.herokuapp.com/login";
// const checkSessionUrl = "https://academy-react.herokuapp.com/login/checkSession";
// const logoutUrl = "https://academy-react.herokuapp.com/login/logout";

export const login = async userData => {
    const request = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  })
  const response = await request.json();
  delete response.password;
  if(!request.ok) {
    throw new Error(response.message);
  }

  return response;
}

const checkSession = async () => {
  const request = await fetch(checkSessionUrl, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    credentials: 'include',
    body: JSON.stringify(),
  });

  const response = await request.json();
  if(!request.ok) {
    throw new Error(response.message);
  }
  return response;
}

export const logout = async() =>{
  const request = await fetch(logoutUrl, {
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
}
export default checkSession
  


