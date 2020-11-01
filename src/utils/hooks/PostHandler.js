import API from '../API'

const usePostHandler = () => {

  const createPost = async (postData) => {
    let post = await API.request('posts', postData, 'POST')    
  }
  

  return {
    createPost,
  }
}

export default usePostHandler;