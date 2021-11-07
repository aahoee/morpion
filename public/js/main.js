const socket = io();

socket.on("connexion", (arg) => {
    console.log(arg);
})


$(function() {
    //Quand le DOM est chargé
    socket.on("player", (arg) => {
        const player = arg;
        console.log(player)
    })
})