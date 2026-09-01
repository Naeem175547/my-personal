import express from 'express'
import fs from 'fs'
const app=express()

app.get('/',(req,res)=>{
    res.send("kya karega is page pr")
})
app.get('/writeFile',(req,res)=>{
    fs.writeFile('./public/output.txt','this is text message',(err)=>{
        if(err){
      
            return res.status(500).send("failed to write data")

        }
        res.send("File written successfully")
    })

})

//read file
app.get('/readFile',(req,res)=>{
    fs.readFile('./public/output.txt','utf-8',(err,data)=>{
        if(err){
      
            return res.status(500).send("failed to read data")

        }
         res.setHeader('Content-Type', 'text/plain')
        res.send(data)
    })

})

// Append File
app.get('/appendFile', (req, res) => {
  fs.appendFile('./public/output.txt', '\nNew Line appended.'  , (err) =>{
    if(err){
      return res.status(500).send("Failed to append file.")
    }
    
    res.send("Content Appended.")
  })
});

// delete(unlink) File
app.get('/deleteFile', (req, res) => {
  fs.unlink('./public/output.txt',  (err) =>{
    if(err){
      return res.status(500).send("Failed to delete file.")
    }
    
    res.send("file deletedy")
  })
});

//read a folder/directory
app.get('/readFolder', (req, res) => {
  fs.readdir('./public',  (err,files) =>{
    if(err){
      return res.status(500).send("Failed to read dir.")
    }

    console.log(files)
    files.forEach(file=>{
        console.log(file)
    })
    res.send("File deleted successfully")

  })
});


// File Rename
app.get('/renameFile', (req, res) => {
  fs.rename('./public/output.txt', './public/new-output.txt',(err) =>{
    if(err){
      return res.status(500).send("Failed to rename file.")
    }
    
    res.send("File renamed Successfully")
  })
});


// Stream Data
app.get('/streamText', (req, res) => {
  const fileStream = fs.createReadStream('./public/new-output.txt')

  fileStream.on('open', ()=>{
    fileStream.pipe(res)
  })

  fileStream.on('error', ()=>{
     res.status(500).send("File not found or error reading file.")
  })
});

// Create Folder
app.get('/creatFolder', (req, res) => {
  fs.mkdir('./public/myFolder',(err) =>{
      if(err){
        return res.status(500).send("Error creating folder.")
      }
      
      res.send("Folder created Successfully")
  })
})


// Rename Folder
app.get('/renamFolder', (req, res) => {
  fs.rename('./public/myFolder', './public/renamedFolder',(err) =>{
      if(err){
        return res.status(500).send("Error renaming folder.", err)
      }
      
      res.send("Folder renamed Successfully")
  })
})

// Delete Folder
app.get('/deleteFolder', (req, res) => {
  fs.rmdir('./public/renamedFolder', (err) =>{
      if(err){
        return res.status(500).send("Error deleting folder.", err)
      }
      
      res.send("Folder deleted Successfully")
  })
})

// Read PDF File 
app.get('/readPdf', (req, res) => {
  fs.readFile('./public/first.pdf', (err, data) =>{
      if(err){
        return res.status(500).send("PDF not found.", err)
      }
      
      res.setHeader('Content-Type', 'application/pdf')
      res.send(data)
  })
});


// Read JSON File 
app.get('/read-json', (req, res) => {
  fs.readFile('./public/data.json', (err, data) =>{
      if(err){
        return res.status(500).send("JSON not found.", err)
      }
      
      res.setHeader('Content-Type', 'application/json')
      res.send(data)
  })
});

// Write JSON file 
app.get('/write-json', (req, res) => {
  const filePath = './public/data.json'
  const data = { name:'Salman Khan', email: 'salman@email.com', age: 25 }

  fs.writeFile(filePath, JSON.stringify(data),(err) =>{
      if(err){
        return res.status(500).send("Failed to write JSON file.", err)
      }
      
      res.send('JSON File written successfully')
  })
});


// Write JSON file and keep existing data
app.get('/append-json', (req, res) => {
  const filePath = './public/data.json'
  const newData = { name:'Yahu Baba', email: 'yb@email.com', age: 23 }

  fs.readFile(filePath, (err, data) =>{
      if(err){
        return res.status(500).send("Failed to read JSON file.", err)
      }

      let jsonData;
      jsonData = JSON.parse(data)
      
      if(!Array.isArray(jsonData)){
        jsonData = [jsonData]
      }

      jsonData.push(newData)

      fs.writeFile(filePath, JSON.stringify(jsonData),(err) =>{
          if(err){
            return res.status(500).send("Failed to write JSON file.", err)
          }
          
          res.send('JSON File appended successfully')
      })
  })

});

app.get('/read-image', (req, res) => {
  fs.readFile('./public/image.jpg', (err, data) =>{
      if(err){
        return res.status(500).send("Image not found.", err)
      }
      
      res.setHeader('Content-Type', 'image/jpeg')
      res.send(data)
  })
});

// Read video file
app.get('/read-video', (req, res) => {
  fs.readFile('./public/earth.mp4', (err, data) =>{
      if(err){
        return res.status(500).send("Video not found.", err)
      }
      
      res.setHeader('Content-Type', 'video/mp4')
      res.send(data)
  })
});

// Getting information for a file
app.get('/file-info', (req, res) => {
   fs.stat('./public/new-output.txt', (err, stats) =>{
      if(err){
        return res.status(500).send("File not found.", err)
      }
      
      console.log(stats)
      res.send(stats.size + 'bytes')
      console.log("File : " + stats.isFile())
      console.log("Folder : " + stats.isDirectory())
  })
}); 

// check if file exists
app.get('/file-exists', (req, res) => {
  fs.access('./public/earth123.mp4', (err) =>{
      if(err){
        res.send("File does not exist")
      }
      
      res.send("File Exists")
  })
});

app.listen(3000,()=>{
    console.log("server in running on port 3000")
}) 