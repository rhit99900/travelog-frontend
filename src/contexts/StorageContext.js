import React, { createContext, useState } from 'react'
// import { Storage } from '@google-cloud/storage'
import path from 'path'

export const StorageContext = createContext({
  uploadItem: () => {},
  loadedMedia: null,
  setLoadedMedia: null,
})

const { Provider } = StorageContext

const StorageProvider = ({ children }) => {
  const { uploadItem, loadedMedia, setLoadedMedia } = useHandler()

  return (
    <Provider value={{ uploadItem, loadedMedia, setLoadedMedia }}>
      {children}
    </Provider>
  )
}

const useHandler = () => {
  const [ itemURL, setItemURL ] = useState();
  const [ loadedMedia, setLoadedMedia ] = useState();

  const uploadItem = async (media) => {    

    let mediaData;
    if(media.baseUrl){
      mediaData = {
        url: media.baseUrl,
        name: media.name,
        extension: media.mimeType.split('/')[1],
        mime: media.mimeType,
      }
    }
    else{
      mediaData = {
        data: media.data,
        name: media.name,
        extension: media.mimeType.split('/')[1],
        mime: media.mimeType
      }
    }

    const headers = { 
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    return new Promise((resolve, reject) => {
      let result = fetch('/upload', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(mediaData)
      })
      .then(response => response.json())
      .then(data => {   
        setLoadedMedia(data.metadata);   
        resolve(data.metadata);
      })
      .catch((error)=> {
        console.error(error);
        return false;
      })
    })
  }  

  return {
    uploadItem,
    loadedMedia,
    setLoadedMedia
  }
}

export default StorageProvider;