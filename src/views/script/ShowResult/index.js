const counterDiv = document.querySelector("#counterHitsArea");

function showHits(){
    const urlParams = location.search;
    let hits = urlParams.slice(1);
    hits = Number(hits.trim().split('=')[1]);
    counterDiv.innerHTML = `
        <h2>Parabéns você acertou ${hits} questões!</h2
    `
}
showHits();