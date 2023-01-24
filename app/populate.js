
const { exec } = require('child_process');

function populate(){
 var yourscript = exec('./populate.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
}

setTimeout(function () {
    populate();
  }, 3000);
