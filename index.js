import inquirer from'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    //Takes the input url from user
    .prompt([
        {
         message:"Enter the URL here",
         name:"URL",
        },
    ]) 
    //convert the input url into image
    .then((answers) => {
          const url=answers.URL;
          var qr_img=qr.image(url);
          qr_img.pipe(fs.createWriteStream("qr_img.png"));
    })
