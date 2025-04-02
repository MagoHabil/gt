function calcularDano() {
    let linhas = document.querySelectorAll("#tabela-dano tr");

    linhas.forEach(linha => {
        let ataque = linha.querySelectorAll("input")[0].value;
        let defesa = linha.querySelectorAll("input")[1].value;
        
       
        ataque = parseInt(ataque) || 0;
        defesa = parseInt(defesa) || 0;
        
        let dano = Math.max(0, ataque - defesa);
        
        linha.querySelector(".dano").textContent = dano;
    });
}
