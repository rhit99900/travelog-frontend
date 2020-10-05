import React, { createContext, useState } from 'react'
import API from '../utils/API'
import useAuthHandler from '../utils/hooks/AuthHandler'

export const UserContext = createContext({
  thisUser: {},
  authenticateUser: () => {},
  registerUser: () => {}
});


const { Provider } = UserContext

const UserProvider = ({ children }) => {
  const { thisUser, authenticateUser, registerUser } = useHandler()
  const { getCurrentUser, unsetCurrenctUser, accessLevel } = useAuthHandler();

  return (
    <Provider value={{ thisUser, authenticateUser, registerUser }}>
      {children}
    </Provider>
  )
}


const useHandler = () => {
  const [ thisUser, setThisUser ] = useState({})

  const authenticateUser = async (userData) => {
    if(userData.email && userData.password){
      let user = await API.request('login', userData, 'POST')      
      if(user){        
        setThisUser(user);
        return true;
      }
    }
    else{
      console.error('Invalid Login Parameters');
    }
  }

  const registerUser = async (userData) => {
    
    if(userData.username && userData.password && userData.email){      
      let user = await API.request('users',userData,'POST');
      if(user){
        setThisUser(user);
        return true;
      }      
    }
    else{
      console.error('Invalid Login Parameters');
    }
  }

  return{
    thisUser,
    authenticateUser,
    registerUser
  }
}

export default UserProvider;