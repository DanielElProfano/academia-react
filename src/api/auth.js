const loginUrl = "http://localhost:4000/login";
const checkSessionUrl = "http://localhost:4000/auth/check-session";
const logoutUrl = "http://localhost:4000/login/logout";

export const login = async userData => {
  debugger
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
  if(!request.ok) {
    return new Error(response.message);
  }

  return response;
}

export const checkSession = async () => {
  const request = await fetch(checkSessionUrl, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    credentials: 'include',
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
