
let  cvet = ["white", "gray", "black"];
let  form = ["krug", "treugolnik", "kvadrat"];
let  razmer = ["bolshoi" , "srednii", "malenki"];

let rand1 =  Math.floor(Math.random()*3);
let rand2 =  Math.floor(Math.random()*3);
let rand3 =  Math.floor(Math.random()*3);

let vivod = {
    color: cvet[rand1],
    form: form[rand2],
    razmer: razmer[rand3]
}
console.log(vivod.color, vivod.form, vivod.razmer);



