const text="Feliz aniversário meu amor 💖";
let i=0;
setInterval(()=>{
typing.innerHTML+=text[i++]||"";
},100);

const start=new Date("2024-02-28");
setInterval(()=>{
let diff=Date.now()-start;
contador.innerText=Math.floor(diff/86400000)+" dias juntos";
},1000);

document.querySelectorAll(".slideshow img")[0].style.display="block";
let s=0;
setInterval(()=>{
document.querySelectorAll(".slideshow img")[s].style.display="none";
s=(s+1)%5;
document.querySelectorAll(".slideshow img")[s].style.display="block";
},3000);

setInterval(()=>{
let h=document.createElement("div");
h.className="heart";
h.innerText="❤";
h.style.left=Math.random()*100+"%";
document.body.appendChild(h);
setTimeout(()=>h.remove(),5000);
},300);
