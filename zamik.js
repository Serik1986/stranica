
function createIncrementor(p) {
    return function (s) {
        return p-s
        
    }
}

let ser = createIncrementor(5);
console.log(ser(3));


function ssilka(url) {
    return function (end) {
        return `https://${url}.${end}`;
        
    }
    }
    let viz = ssilka('google');
console.log(viz('com'));


function outer(){
    
 function inner() {
    var outerVar = 4;
    var handle;
    var innetVar = 5;
console.log(outerVar);
console.log(innetVar);
}
return inner();
}

return outer ();
inner();


function time() {
         
     
    let d = new Date();
    let hours = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    console.log(hours, min, sec);
    
     }
    setInterval(time,1000);
