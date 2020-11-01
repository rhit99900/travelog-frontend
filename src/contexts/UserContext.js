import React, { createContext, useState, useEffect } from 'react'
import API from '../utils/API'
import useAuthHandler from '../utils/hooks/AuthHandler'
import usePostHandler from '../utils/hooks/PostHandler'

export const UserContext = createContext({
  thisUser: {},
  loading: false,
  authenticateUser: () => {},
  registerUser: () => {},
  setCurrentUser: () => {},
  getCurrentUser: () => {}, 
  unsetCurrentUser: () => {},
  accessLevel: () => {},
  createPost: () => {},
});


const { Provider } = UserContext

const UserProvider = ({ children }) => {
  const { thisUser, authenticateUser, registerUser, loading, setCurrentUser, getCurrentUser, unsetCurrentUser, accessLevel } = useHandler()  

  return (
    <Provider value={{ loading, thisUser, authenticateUser, registerUser, setCurrentUser, getCurrentUser, unsetCurrentUser, accessLevel }}>
      {children}
    </Provider>
  )
}


const useHandler = () => {
  const [ thisUser, setThisUser ] = useState({})
  const [ loading, setLoading ] = useState(false);

  const { setCurrentUser, getCurrentUser, unsetCurrentUser, accessLevel } = useAuthHandler();
  const { createPost }  = usePostHandler()

  let existsUser = getCurrentUser();
  
  useEffect(() => {
    setThisUser(existsUser);
  },[])

  const authenticateUser = async (userData) => {  
    setLoading(true); 
    if(userData.username && userData.password){
      let user = await API.request('login', userData, 'POST')
      if(user){        
        setActiveUser(user);
        setLoading(false);
        return true;
      }
      else{
        setLoading(false);
        return false;
      }
    }
    else{      
      console.error('Invalid Login Parameters');
      setLoading(false);
    }
  }

  const setActiveUser = (user) => {
    setThisUser(user);
    setCurrentUser(user);
  }

  const unsetActiveUser = () => {
    setThisUser({});
    unsetCurrentUser();
  }

  const registerUser = async (data) => {
    setLoading(true);
    const userData = {
      ...data,
      date_of_birth: "1970-01-01T00:00:00.00Z",
      profile_image: "null",
      user_type: "null",
      social_login_token: "null",
      profile_type: "public",
      is_active: true
    }

    if(userData.username && userData.password && userData.email){      
      let user = await API.request('users',userData,'POST');
      if(user){
        setActiveUser(user);
        setLoading(false);
        return true;
      }
      else{
        setLoading(false);
        return false;
      }
    }
    else{
      console.error('Invalid Login Parameters');
    }
  }

  return{
    thisUser,
    loading,
    authenticateUser,
    registerUser,
    setCurrentUser, 
    getCurrentUser, 
    unsetCurrentUser, 
    accessLevel,
    createPost
  }
}

export default UserProvider;
