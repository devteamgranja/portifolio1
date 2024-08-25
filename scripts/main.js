const returnCardsMember = () => {
    const conteinerCards = document.querySelector(".conteiner-cards");
    for (let i = 0; i < dadosMembers.length; i++) {
        conteinerCards.innerHTML += 
        `
            <div class="conteiner-card">
                <img src="${dadosMembers[i].imgMember}">
                <div class="conteiner_card-info">
                    <h3 class="name">${dadosMembers[i].nameMember}</h3>
                    <h4 class="name_area">${dadosMembers[i].areaMember}</h4>
                    <button onclick="actConteinerInfo(${i})" class="bnt-info-person">
                        saiba mais
                    </button>
                </div>
                <div onclick="actConteinerInfo(${i})" class="conteiner-info conteinerHidden">
                    <button class="bntCloseInfo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                    </button>
                    <p> ${dadosMembers[i].sobreMember} </p>
                </div>
            </div>
        `;
        
    }
}
returnCardsMember()
const actConteinerInfo = (possitionClass) => {
    const conteinerInfo = document.querySelectorAll(".conteiner-info");
    conteinerInfo[possitionClass + 1].classList.toggle("conteinerHidden");
}