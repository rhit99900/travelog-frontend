// File Consists of Helper Functions 

const Helper = {
  isValidUser: (userData) => {    
    if(userData.hasOwnProperty('email') && 
      userData.hasOwnProperty('token') && 
      userData.hasOwnProperty('is_active') &&       
      userData.is_active
    ){
      return true
    }
    else 
      return false 
  }
}

export default Helper