
const jsonDat = `{
    "name": "Francis", 
    "age": 21, 
    "city": "Davao City"
}`;
    
    
const jsonObj = JSON.parse(jsonDat);
console.log(JSON.stringify(jsonObj));