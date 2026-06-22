const text = {

    cs:{
    title:"🎮 Moje Hry",
    games:["Minecraft","Roblox","Fortnite"],
    play:"Hrát"
    },
    
    en:{
    title:"🎮 My Games",
    games:["Minecraft","Roblox","Fortnite"],
    play:"Play"
    },
    
    de:{
    title:"🎮 Meine Spiele",
    games:["Minecraft","Roblox","Fortnite"],
    play:"Spielen"
    }
    
    };
    
    const language = document.getElementById("language");
    
    language.addEventListener("change", function(){
    
    let lang = this.value;
    
    // Nadpis
    document.getElementById("title").innerText =
    text[lang].title;
    
    // Všechny názvy her
    document
    .querySelectorAll(".card h2")
    .forEach((game,index)=>{
    game.innerText =
    text[lang].games[index];
    });
    
    // Všechna tlačítka
    document
    .querySelectorAll(".card button")
    .forEach(button=>{
    button.innerText =
    text[lang].play;
    });
    
    });