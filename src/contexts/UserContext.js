import React, { createContext, useState, useEffect } from 'react'
import API from '../utils/API'
import useAuthHandler from '../utils/hooks/AuthHandler'
import usePostHandler from '../utils/hooks/PostHandler'
import { signOut } from './../utils/hooks/GoogleAPIAuth'

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
  getUsers: () => {},  
  unsetActiveUser: () => {},
  socialLogin: () => {},
  updateUser: () => {},
  me: () => {},
  travelog: () => {},
});


const { Provider } = UserContext

const UserProvider = ({ children }) => {
  const { 
    thisUser, 
    loading, 
    authenticateUser, 
    registerUser,     
    setCurrentUser, 
    getCurrentUser, 
    unsetCurrentUser, 
    accessLevel, 
    getUsers, 
    unsetActiveUser,
    socialLogin,
    updateUser,
    me,
    travelog,
  } = useHandler()  

  return (
    <Provider value={{ 
      loading, 
      thisUser, 
      authenticateUser, 
      registerUser, 
      setCurrentUser, 
      getCurrentUser, 
      unsetCurrentUser, 
      accessLevel, 
      getUsers,
      unsetActiveUser,
      socialLogin,
      updateUser,
      me,
      travelog
    }}>
      {children}
    </Provider>
  )
}


const useHandler = () => {
  const [ thisUser, setThisUser ] = useState({})
  const [ loading, setLoading ] = useState(false);

  const { setCurrentUser, getCurrentUser, unsetCurrentUser, accessLevel } = useAuthHandler();
  const { createPost }  = usePostHandler()
  
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

  const unsetActiveUser = async () => {    
    try{      
      setThisUser({});
      unsetCurrentUser();      
      const signedOut = await signOut();
      if(signedOut){        
        return true;
      }
    }
    catch(e){
      console.error(e);
      return false;
    }
    
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
      let user = await API.request('register',userData,'POST');
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

  const updateUser = async (data) => {
    setLoading(true);
    if(data !== undefined && data !== null){
      let user = await API.request('me', data, 'PUT', true)
      if(user){        
        setActiveUser(user)
        setLoading(false)
        return true         
      }
      else{
        setLoading(false)
        return false
      }
    }
    else{
      console.error('Invalid User Data');
    }
  }
  
  const socialLogin = async (data) => {
    // setLoading(true);
    const loginDetails = {}
    if(data.hasOwnProperty('googleId')){
      loginDetails.login_type = 'google'
      loginDetails.social_login_token = data.accessToken
      loginDetails.email = data.profileObj.email
      // loginDetails.profile_image = data.profileObj.imageUrl
      loginDetails.profile_image = 'new'
    }
    else if(data.hasOwnProperty('facebook')){
      loginDetails.login_type = 'facebook'
      loginDetails.email = data.profile.email      
    }

    let user = await API.request('social', loginDetails,'POST')
    console.log(user);
    if(user){      
      setActiveUser(user)      
    }
  }

  const me = async () => {
    let user = await API.request('me', undefined ,'GET', true)
    if(user){
      if(user.result && !thisUser){
        setThisUser(user.result)
        return user.result
      }
      else{
        setThisUser(user)
        return user;
      }
    }
  }

  const getUsers = async (data = '') => {
    setLoading(true);
    let user = await API.request('searchUser', undefined ,'GET', true, 'username='+data);    
    if(user){
      if(user.result && !thisUser) {      
        setThisUser(user.result);
        setLoading(false);
        return user.result;
      }
      else{
        setThisUser(user);
        setLoading(false);
        return user;
      }
    }
  }
  
  const travelog = async (data) => {  
    let responseData = await API.request('travelog', data ,'POST', true)
    if(responseData){     
        return responseData;      
    } else {
      return false;
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
    createPost,
    getUsers,
    unsetActiveUser,
    socialLogin,
    updateUser,
    me,
    travelog
  }
}

export default UserProvider;
