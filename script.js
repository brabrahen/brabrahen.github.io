const elementocng = document.querySelector("#muda1");
const elementoimg = document.querySelector("#img")
const alterar = document.querySelector("#alterar")

elementocng.addEventListener("click", ()=>{
       
        if(elementocng.value == "primeiraMudanca"){
                elementoimg.src = "./style/zenitsu_bolado.gif"
                alterar.innerText = "Zenitsu Boladão"
                elementocng.innerText = "Clique para ver o melhor momento de Rengoku"        
                elementocng.value = "segundaMudanca"
        } else if(elementocng.value == "segundaMudanca"){
                elementoimg.src = "./style/ds_rengoku.gif"
                alterar.innerText = "Rengoku REST IN POWER BRO :("
                elementocng.innerText = "Clique para ver o melhor momento de Tanjiro" 
                elementocng.value = "terceiraMudanca"
        } else if(elementocng.value == "terceiraMudanca"){
                elementoimg.src = "./style/tanjiro_ds.gif"
                alterar.innerText = "Tanjiro, O Brabo!!"
                elementocng.innerText = "Clique para ver o melhor momento de Inosuke" 
                elementocng.value = "quartaMudanca"
        } else if(elementocng.value == "quartaMudanca"){
                elementoimg.src="./style/inosuke_ds.gif"
                alterar.innerText = "O nosso doidinho mais amado, Inosuke"
                elementocng.innerText = "OBRIGADO PELA ATENÇÃO!" 
        } 
});