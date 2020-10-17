import {GOOGLE_PHOTOS_API_KEY, GOOGLE_PHOTOS} from '../Constants'

const gapi = window.gapi
let GoogleAuth;
let isAuthenticated = false;

gapi.load('client:auth2', () => {
  gapi.auth2.init({
    client_id: GOOGLE_PHOTOS.client_id
  })
  GoogleAuth = gapi.auth2.getAuthInstance();
  GoogleAuth.isSignedIn.listen(updateSigninStatus);
  console.info('Google Photos APIs Loaded');
})

const updateSigninStatus = (isSignedIn) => {
  console.log(isSignedIn);
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
        gapi.client.setApiKey(GOOGLE_PHOTOS_API_KEY);
        return gapi.client.load('https://photoslibrary.googleapis.com/$discovery/rest?version=v1')
          .then(() => {
            console.log("GAPI client loaded for API");
          }, (err) => {
            console.error("Error loading GAPI client for API", err);
          })
      })
  }
  else{
    return gapi.client.load('https://photoslibrary.googleapis.com/$discovery/rest?version=v1')
      .then(() => {
        console.log("GAPI client loaded for API");
      }, (err) => {
        console.error("Error loading GAPI client for API", err);
      })    
  }
}

const loadPhotos = async (params) => {
  return await gapi.client.photoslibrary.mediaItems.list(params);    
}

const loadAlbums = async (params) => {
  return await gapi.client.photoslibrary.albums.list(params);
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