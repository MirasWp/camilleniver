const vela=document.getElementById("vela");
const fogo=document.getElementById("fogo");
const msg=document.getElementById("msg");
const pedido=document.getElementById("pedido");
const pedidoBox=document.getElementById("pedidoBox");
const confirmar=document.getElementById("confirmar");

pedidoBox.style.display="none";

vela.onclick=()=>{

fogo.style.display="none";
msg.innerText="Agora faça um pedido ✨";
pedidoBox.style.display="block";

// confete + fumaça
for(let i=0;i<40;i++){

let c=document.createElement("div");
c.className="confetti";
c.style.left=Math.random()*100+"%";
c.style.background=`hsl(${Math.random()*360},100%,50%)`;
document.body.appendChild(c);
setTimeout(()=>c.remove(),2000);

let s=document.createElement("div");
s.className="smoke";
s.style.left=50+Math.random()*20-10+"%";
document.body.appendChild(s);
setTimeout(()=>s.remove(),2000);
}

};

confirmar.onclick=()=>{

if(pedido.value.trim()=="") return alert("Escreva um pedido ✨");

localStorage.setItem("pedido",pedido.value);
location.href="secreto.html";

};
