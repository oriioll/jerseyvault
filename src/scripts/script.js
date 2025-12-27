
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


    } catch (error) {
        console.error("Error al pillar las camisetas:", error);
    }
}


getJerseys(133604);