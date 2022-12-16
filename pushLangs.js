const axios = require("axios");
const fs = require("fs");

const langsDir = fs.readdirSync("public/locales");

const data = []; //{idContent, headerContent, textContent, language}

for(const language of langsDir){
    for(const ns of fs.readdirSync("public/locales/" + language)){
        const nsFile = JSON.parse(fs.readFileSync("public/locales/" + language + "/" + ns).toString());
        for(const idContent in nsFile){
            const textContent = nsFile[idContent];
            //console.log({idContent, headerContent: ns.split(".")[0], textContent, language});
            data.push({idContent, headerContent: ns.split(".")[0], textContent, language})
        }
    }
}


(async function(){
    for(const object of data){
        try{
            await axios.post("https://mintex.pro/api/users/create-content", object);
            console.log(object, "Send");
        } catch(err){
            console.log(object, "Not send");
        }
    }
})();
console.log(data);