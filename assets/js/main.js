
function createGame(grupo,jogo1, hora,jogo2){
return `
<h3>${grupo}</h3>
<li>
   <img src="./assets/images/${jogo1}.svg" alt="Bandeira do ${jogo1}">
  <p class='left'>${jogo1}</p>
  <strong>${hora}</strong>
  <p class='right'>${jogo2}</p>
  <img src="./assets//images/${jogo2}.svg" alt="Bandeira do ${jogo2}">  
  </li>     `
}

function createCard(fase,date,day,games){
 return `
 <div  class="card">
<span class="fases">${fase}</span>
       
 <h2>${date} <span>${day}</span></h2>

 <ul>
 ${games}
  </ul>
   </div> `   
}

document.querySelector('.app').innerHTML=`
<header>
<img src="./assets/images/corelogo/logo.svg" alt="Logo">
</header>
<main class="cards">
${createCard("Fase de Grupos","20/11", 'Domingo',
createGame("Grupo A","catar","13:00","Equador")
)}

${createCard("Fase de Grupos","21/11", "Segunda-Feira",
createGame("Grupo b","Inglaterra","10:00","Irã")+
createGame("Grupo A","Senegal","13:00","Holanda")+
createGame("Grupo b","Estados Unidos","16:00","Gales")
)}

${createCard("Fase de Grupos","22/11", "Terça-Feira",
createGame("Grupo c","Argentina","07:00","Arábia Saudita")+
createGame("Grupo d","Dinamarca","10:00","Tunísia")+
createGame("Grupo c","México","13:00","Polônia")+
createGame("Grupo d","França","16:00","Austrália")
)}

${createCard("Fase de Grupos","23/11", "Quarta-Feira",
createGame("Grupo f","Marrocos","07:00","Croácia")+
createGame("Grupo e","Alemanha","10:00","Japão")+
createGame("Grupo f","Espanha","13:00","Costa Rica")+
createGame("Grupo e","Bélgica","16:00","Canadá")
)}

${createCard("Fase de Grupos","24/11", "Quinta-Feira",
createGame("Grupo g","Suíça","07:00","Camarões")+
createGame("Grupo h","Uruguai","10:00","Coreia do Sul")+
createGame("Grupo h","Portugal","13:00","Gana")+
createGame("Grupo g","Brasil","16:00","Sérvia")
)}

${createCard("Fase de Grupos","25/11", "Sexta-Feira",
createGame("Grupo b","Gales","07:00","Irã")+
createGame("Grupo a","Catar","10:00","Senegal")+
createGame("Grupo a","Holanda","13:00","Equador")+
createGame("Grupo b","Inglaterra","16:00","Estados Unidos")
)}

${createCard("Fase de Grupos","26/11", "Sábado",
createGame("Grupo d","Tunísia","07:00","Austrália")+
createGame("Grupo c","Polônia","10:00","Arábia Saudita")+
createGame("Grupo d","França","13:00","Dinamarca")+
createGame("Grupo c","Argentina","16:00","México")
)}

${createCard("Fase de Grupos","27/11", "domingo",
createGame("Grupo e","Japão","07:00","Costa Rica")+
createGame("Grupo f","Bélgica","10:00","Marrocos")+
createGame("Grupo f","Croácia","13:00","Canadá")+
createGame("Grupo e","Espanha","16:00","Alemanha")
)}

${createCard("Fase de Grupos","28/11", "Segunda-Feira",
createGame("Grupo g","Camarões","07:00","Sérvia")+
createGame("Grupo h","Coreia do Sul","10:00","Gana")+
createGame("Grupo g","Brasil","13:00","Suíça")+
createGame("Grupo h","Portugal","16:00","Uruguai")
)}

${createCard("Fase de Grupos","29/11", "Terça-Feira",
createGame("Grupo a","Equador","12:00","Senegal")+
createGame("Grupo a","Holanda","12:00","Catar")+
createGame("Grupo b","Irã","16:00","Estados Unidos")+
createGame("Grupo b","Gales","16:00","Inglaterra")
)}

${createCard("Fase de Grupos","30/11", "Quarta-Feira",
createGame("Grupo d","Tunísia","12:00","França")+
createGame("Grupo d","Austrália","12:00","Dinamarca")+
createGame("Grupo c","Polônia","16:00","Argentina")+
createGame("Grupo c","Arábia Saudita","16:00","México")
)}

${createCard("Fase de Grupos","01/12", "Quinta-Feira",
createGame("Grupo d","Croácia","12:00","Bélgica")+
createGame("Grupo d","Canadá","12:00","Marrocos")+
createGame("Grupo c","Japão","16:00","Espanha")+
createGame("Grupo c","Costa Rica","16:00","Alemanha")
)}


${createCard("Fase de Grupos","02/12", "Sexta-Feira",
createGame("Grupo d","Coreia do Sul","12:00","Portugal")+
createGame("Grupo d","Gana","12:00","Uruguai")+
createGame("Grupo c","Sérvia","16:00","Suíça")+
createGame("Grupo c","Camarões","16:00","Brasil")
)}

${createCard("Oitavas de Final","03/12", "Sábado",
createGame(" ","Confirmar","12:00","Confirmar")+
createGame("","Confirmar","16:00","Confirmar")
)}

${createCard("Oitavas de Final","04/12", "Domingo",
createGame(" ","Confirmar","12:00","Confirmar")+
createGame("","Confirmar","16:00","Confirmar")
)}

${createCard("Oitavas de Final","05/12", "Segunda-Feira",
createGame(" ","Confirmar","12:00","Confirmar")+
createGame("","Confirmar","16:00","Confirmar")
)}

${createCard("Oitavas de Final","06/12", "Terça-Feira",
createGame(" ","Confirmar","12:00","Confirmar")+
createGame("","Confirmar","16:00","Confirmar")
)}

${createCard("Quartas de Final","09/12", "Sexta-Feira",
createGame(" ","Confirmar","12:00","Confirmar")+
createGame("","Confirmar","16:00","Confirmar")
)}
${createCard("Quartas de Final","10/12", "Sábado",
createGame(" ","Confirmar","12:00","Confirmar")+
createGame("","Confirmar","16:00","Confirmar")
)}

${createCard("Semifinais","13/12", "Terça-Feira",
createGame(" ","Confirmar","16:00","Confirmar")
)}

${createCard("Semifinais","14/12", "Quarta-Feira",
createGame("","Confirmar","16:00","Confirmar")
)}

${createCard("Disputa pelo terceiro lugar","17/12", "Sábado",
createGame("","Confirmar","12:00","Confirmar")
)}

${createCard("Final","17/12", "Sábado",
createGame("","Confirmar","12:00","Confirmar")
)}
  </main>

`
// acento grave para quebrar de linha na string 