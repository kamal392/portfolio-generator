
const fileSystem = require('fs');
// const { resolve } = require('path');

const writeFile = fileContent =>{
  return new Promise((resolve,reject)=>{
 fileSystem.writeFile('./dist/index.html',fileContent,err =>{
    if (err){
        reject(err);
// return out of the function here to make sure the promise doesn't accidentally execute the resolve
return;
    }
   
    // if everything went well, resolve the promise and send the successful data to the .then()method resolve
    resolve ({
        ok:true,
        message:"file created",
        
    
        
    
        
    });
 });

  });
};
// we need to take fs.copyFile()functionality and turn it into a promise-based function 
 const copyFile =() =>{
    return new Promise((resolve, reject) => {
fileSystem.copyFile('./src/style.css','./dist/style.css', err =>{
        
        if (err) {
          reject(err);
// return out of the function
          return;
        }

        resolve({
            ok:true,
            message:"file copied successful"
            
        });
});

    });

 };


module.exports = {writeFile,copyFile};