import React, { useState } from 'react'

import LocalStorage from '../LocalStorage'

const useAuthHandler = () => {

  const setCurrentUser = (user) => {
    LocalStorage.setItem('user', JSON.stringify(user));
  }

  const getCurrentUser = () => {
    return JSON.parse(LocalStorage.getItem('user'));
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