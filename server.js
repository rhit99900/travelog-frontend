const express = require('express')
const http = require('http')
const https = require('https')
const app = express()
const fs = require('fs')
const path = require('path')
const os = require('os')
const bodyParser = require('body-parser')
const md5 = require('md5')
const { Storage } = require('@google-cloud/storage')


// app.use(express.static(path.join(__dirname, 'build')));

let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(bodyParser.urlencoded({extended: false}))
app.use(jsonParser)

const storage = new Storage({
  keyFilename: path.join(__dirname,'travelogue-281305-3205fd8c5ab3.json'),
  projectId: 'travelogue-281305'
});

const destination = os.tmpdir();
const BUCKET_NAME = 'travelog-media-storage'

const downloadFile = async function(file){
  return new Promise((resolve, reject) => {
    let request = https.get(file.url, function(response){        
      if(response.statusCode === 200){
        var tempfile = fs.createWriteStream(destination + '/' + md5(file.url) + '.' + file.extension);
        response.pipe(tempfile);
        tempfile.on('finish', function(){
          // console.log(tempfile.path);
          resolve(tempfile.path);
        })
      }
    })
  })
}

const deleteTemp = function(file){
  try{
    fs.unlinkSync(file)
  } catch(error){
    console.log(error)
  }  
}

app.post('/upload', urlencodedParser, async function(request, res){  
  if(request.body.url){    
    const file = request.body;
    let fileName = await downloadFile(file);
    // console.log('FileName', fileName);
    if(fileName){
      // console.log(path.join(destination,fileName));
      storage.bucket(BUCKET_NAME).upload(fileName, {
        destination: md5(file.url)+'.'+file.extension,
        contentType: file.mime,
        metadata: {
          sourceURL: file.url,          
        }
      }, (err, file) => {
        if(err !== null){
          res.status(500).send(err);
        }
        else{
          res.status(200).send(file);
          deleteTemp(fileName);
        }
      })          
    }
  }
});

app.get('/', (req, res) => {
  res.send(path.join(__dirname, 'build', 'index.html'));
})

app.listen(5000);