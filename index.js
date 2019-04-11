const fs = require('fs')
const shell = require('shelljs');

const sleep = function(sec) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, sec * 1000)
    })
};

(async () => {

    let i=0;
    for (i=0;i<100000;i++) {
        try {
        
            fs.appendFileSync('./aa', '\na')
            
            shell.exec(`git add ./aa`);
            // git commit --date="10 day ago" -m "Your commit message" 
            shell.exec(`git commit --date="1000 day ago" -m "update some text"`);

        } catch (error) {
            console.error('error', error);
        }
    }
})();