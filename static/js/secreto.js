function verificar(){

let nome=document.getElementById("nome").value.toLowerCase();

if(nome==="maevis"){

music.play();
document.querySelector(".login").style.display="none";
document.getElementById("envelope").style.display="block";

let pedido=localStorage.getItem("pedido");

document.getElementById("mensagem").innerHTML=
`Desde 28 de fevereiro minha vida mudou.<br><br>
Seu pedido foi guardado comigo:<br>
<strong>${pedido}</strong><br><br>
Que a gente continue criando memórias,
superando tudo juntos
e se escolhendo todos os dias.
`;

for(let i=0;i<40;i++){
let p=document.createElement("div");
p.className="particle";
p.style.left=Math.random()*100+"%";
p.style.animationDelay=Math.random()*5+"s";
document.body.appendChild(p);
}

}else{
alert("Nome errado 😅");
}

}

function abrirCarta(){
document.getElementById("envelope").classList.add("open");
document.getElementById("final").style.display="block";
}

for(let i=0;i<30;i++){
let h=document.createElement("div");
h.className="bg-heart";
h.innerText=Math.random()>.5?"💖":"🤍";
h.style.left=Math.random()*100+"%";
h.style.animationDelay=Math.random()*10+"s";
document.body.appendChild(h);
}

