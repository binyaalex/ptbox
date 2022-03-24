const cp = require('child_process');

try {
    const data = cp.execSync('python3 theHarvester.py -d bbc.com -b bing -f result');
    console.log('#2. exec sync')
    console.log(data.toString());
} catch (err) {
	console.log(err)
}


const result = require('./result.json')
console.log(1)
console.log(result)
const extractData = result.hosts
console.log(extractData)

// stringify JSON Object
const jsonContent = JSON.stringify(extractData);
console.log(jsonContent);
 
fs.writeFile("../../frontend/public/extractResult.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});