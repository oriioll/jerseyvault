
const getJerseys = async function(teamId) {
    
    
    const url = `https://www.thesportsdb.com/api/v1/json/3/lookupequipment.php?id=${teamId}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.equipment) {
            console.log("No hay camisetas para este ID.");
            return;
        }

        //array with all the jerseys
        const camisetas = data.equipment;

        console.log(`👕 HAS CARGADO ${camisetas.length} EQUIPACIONES`);
        console.log(camisetas);
        camisetas.forEach(element => {
            renderCards(element.strSeason, element.strEquipment, element.strType);
        });


    } catch (error) {
        console.error("Error al pillar las camisetas:", error);
    }
}


getJerseys(133731);

function renderCards(season, urlImage, type) {
    const section = document.getElementById('jerseys');
    const card = document.createElement('article');
    card.classList = "jerseyCard";
    card.innerHTML = 
    `
    <img src="${urlImage}" alt="JerseyImage">
        <div class="textInfo">
          <p>${season}</p>
          <p id="type">${type}</p>
        </div>
    `;
    section.appendChild(card);
}