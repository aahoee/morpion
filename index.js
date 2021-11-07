import WebServer from './web/Web.js'
import { Server } from 'socket.io';
import Player from "./models/Player.js";
import Room from "./models/Room.js";


const io = new Server(WebServer.init(), { cors: { origin: '*' } });

var countClients = () => io.engine.clientsCount

io.engine.on("connection_error", (err) => {
    console.log("CONNECTION ERROR:");
    console.log(err.req);      // the request object
    console.log(err.code);     // the error code, for example 1
    console.log(err.message);  // the error message, for example "Session ID unknown"
    console.log(err.context);  // some additional error context
});
const room =  new Room()
io.on("connection", (socket) => {
    console.log(`NEW CONNECTION : ${socket.client.id} / ${socket.handshake.address}`)
    console.log("connexions en cours : " + countClients())
    socket.emit("connexion", "Connexion réussie !")

    const player = new Player(socket.client.id);

    room.addClient(player);

    socket.emit("player", player)

    socket.on("disconnect",() => {
        room.removeClient(socket.client.id)
    })
});

WebServer.listen()
