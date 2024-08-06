export const getAccessToken = () => {
    const myJWT = localStorage.getItem("auth");
  
    if (!myJWT) {
      return "";
    }
  
    const authData = JSON.parse(myJWT);
  
    return authData?.accessToken;
  };