
import LocalStorage from './LocalStorage'

// const api_base_url = process.env.API_BASE_URL
const api_base_url = 'http://api.travelog.voyage/'

const API_ENDPOINTS = {
  users: {
    url: api_base_url+'/users'
  },
  posts: {
    url: api_base_url+'/posts'
  },
  login: {
    url: api_base_url+'/users/login'
  },
  profiles:{
    url: api_base_url+'/profiles'
  },
  getGooglePhotos:{
    url: 'https://photoslibrary.googleapis.com/v1/albums'
  },
  social: {
    url: api_base_url + '/users/socialLogin'
  },
  me: {
    url: api_base_url + '/user'
  },
  searchUser: {
    url: api_base_url + '/profiles/searchUser'
  }
}

const API = {
  request: async (endpoint, data = undefined, method = 'GET', isAuth = false, param = undefined) => {    
    let headers = {};
    
    if(data!== undefined && data.headers){
      headers = data.headers;
    }
    else{
      headers = { 
        "Accept": "application/json",
        "Content-Type": "application/json",       
      }
      if(isAuth){        
        headers['Authorization'] = "Bearer " + LocalStorage.getItem('user');
      }
    }  
   
    //Checking for GET method parameter(query string)
    let endPointURL= API_ENDPOINTS[endpoint].url;
    if (param && method == 'GET') endPointURL+= "?" +param;   

    let result = fetch(endPointURL, {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : undefined
    })
    .then(response => response.json())
    .then(data => {      
      if(data.result)     
        return data.result;
      else
        return data
    })
    .catch((error)=> {
      console.error(error);
      return false;
    })

    return result;
        
  }
}

export default  API;

