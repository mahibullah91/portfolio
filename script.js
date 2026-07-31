const words = [
"Web Developer",
"AI Researcher",
"Computer Science Graduate",
"SAP BTP Learner"
];

let i = 0;

function typing(){

document.getElementById("typing").innerHTML =
words[i];

i++;

if(i>=words.length){
i=0;
}

}

setInterval(typing,2000);

typing();

document.getElementById("theme").onclick=function(){

document.body.classList.toggle("light");

}
