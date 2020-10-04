const api_base_url = process.env.API_BASE_URL

const endpoint = {
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
  }
}

class API{
  static request(endpoint, data){
    let headers = {};
    if(data.headers){
      headers = data.headers;
    }

  }
}