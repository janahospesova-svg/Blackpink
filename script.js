const text = {

cs:{
title:"🎮 Moje Hry",
games:"Minecraft,Roblox"
play:"Hrát"
},

en:{
title:"🎮 My Games",
games:"Minecraft,Roblox"
play:"Play"
},

de:{
title:"🎮 Meine Spiele",
games:"Minecraft,Roblox"
play:"Spielen"
}

};

document
.getElementById("language")
.addEventListener("change", function(){

let lang = this.value;

document.getElementById("title").innerText =
text[lang].title;

document.getElementById("play").innerText =
text[lang].play;

});