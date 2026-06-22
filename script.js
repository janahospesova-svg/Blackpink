const text = {

    cs:{
    title:"🎮 Moje Hry",
    play:"Hrát"
    },
    
    en:{
    title:"🎮 My Games",
    play:"Play"
    },
    
    de:{
    title:"🎮 Meine Spiele",
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