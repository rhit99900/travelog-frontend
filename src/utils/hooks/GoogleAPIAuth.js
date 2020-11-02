import {GOOGLE_PHOTOS_API_KEY, GOOGLE_PHOTOS, GOOGLE_API} from '../Constants'
let GoogleAuth;
let isAuthenticated = false;


if(GOOGLE_API){
  GOOGLE_API.load('client:auth2', () => {
    GOOGLE_API.auth2.init({
      client_id: GOOGLE_PHOTOS.client_id
    })
    GoogleAuth = GOOGLE_API.auth2.getAuthInstance();
    GoogleAuth.isSignedIn.listen(updateSigninStatus);
    console.info('Google Photos APIs Loaded');
  })
}

const updateSigninStatus = (isSignedIn) => {  
  if(isSignedIn) {
    isAuthenticated = true;
  }
  else{
    isAuthenticated = false;
  }
}


const authenticate = () => {
  if(!isAuthenticated){
    return GoogleAuth.signIn({
        scope: 'https://www.googleapis.com/auth/photoslibrary https://www.googleapis.com/auth/photoslibrary.readonly'
      })
      .then(() => {
        console.log('Sign In Successful');      
      }, (err) => {
        console.log('Sign In Error');
      })
      .then(() => {
        GOOGLE_API.client.setApiKey(GOOGLE_PHOTOS_API_KEY);
        return GOOGLE_API.client.load('https://photoslibrary.googleapis.com/$discovery/rest?version=v1')
          .then(() => {
            console.log("GOOGLE_API client loaded for API");
          }, (err) => {
            console.error("Error loading GOOGLE_API client for API", err);
          })
      })
  }
  else{
    return GOOGLE_API.client.load('https://photoslibrary.googleapis.com/$discovery/rest?version=v1')
      .then(() => {
        console.log("GOOGLE_API client loaded for API");
      }, (err) => {
        console.error("Error loading GOOGLE_API client for API", err);
      })    
  }
}

const loadPhotos = async (params) => {
  return await GOOGLE_API.client.photoslibrary.mediaItems.list(params);
}

const loadAlbums = async (params) => {
  return await GOOGLE_API.client.photoslibrary.albums.list(params);
}

export const listPhotos = async () => {
  let photos = await authenticate().then(() => loadPhotos({pageSize: 30}));
  if(photos.result){
    return photos.result;
  }
} 

export const listAlbums = async () => {
  let albums = await authenticate().then(() => loadAlbums({pageSize: 30}));    
  if(albums.result){
    return albums.result;
  }
} 

export const loadMore = async (next) => {
  const photos = await loadPhotos({pageToken: next, pageSize: 30});
  console.log(photos);
  if(photos.result){
    return photos.result;
  }
}