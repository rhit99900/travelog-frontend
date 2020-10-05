import React, { useState } from 'react'

import LocalStorage from '../LocalStorage'

const useAuthHandler = () => {

  const setCurrentUser = (user) => {
    LocalStorage.setItem('user', user);
  }

  const getCurrentUser = () => {
    return LocalStorage.getItem('user');
  }

  const unsetCurrentUser = () => {
    LocalStorage.removeItem('user');
  }

  const accessLevel = () => {
    return true;
  }

  return {    
    setCurrentUser,
    getCurrentUser,
    unsetCurrentUser,
    accessLevel
  }
}

export default useAuthHandler;