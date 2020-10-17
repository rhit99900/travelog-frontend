// const api_base_url = process.env.API_BASE_URL
const api_base_url = 'http://localhost:5000'

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
  }
}

const API = {
  request: async (endpoint, data, method = 'GET') => {    
    let headers = {};
    if(data.headers){
      headers = data.headers;
    }
    else{
      headers = { 
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer "+"travelogue-api"
      }
    }

    let result = fetch(API_ENDPOINTS[endpoint].url, {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : undefined
    })
    .then(response => response.json())
    .then(data => {           
      return data.result;
    })
    .catch((error)=> {
      console.error(error);
      return false;
    })

    return result;
        
  }
}

export default API;