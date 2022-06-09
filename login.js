const but_2 =  document.querySelector(".but_2");
const userName =  document.querySelector("#inp");
let name;





but_2.addEventListener("click",(e)=>{
    // console.log(input.value);
    playerName  = userName.value;
    if(playerName === "name"){
        alert("Please enter your name");
        e.preventDefault();

    }
    else{
    localStorage.setItem("name",userName.value)
    localStorage.setItem(playerName,0);
    }    
})



