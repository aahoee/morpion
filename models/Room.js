import {TYPE} from "../enums/type.enum.js";
import removeItems from "remove-array-items";


export default class Room{

    constructor() {
        this.clients = []
    }

    getOpposite(type){
        var newType = TYPE.EMPTY
        switch (type){
            case TYPE.CROSS:
                newType = TYPE.ROUND
                break;
            case TYPE.ROUND:
                newType = TYPE.CROSS
                break;
        }
        return newType
    }

    addClient(clientObj){

        if (this.clients.length == 2){
            return "Partie en cours, attendez votre tour !"
        }else if(this.clients.length == 0){
            clientObj.setType(TYPE.ROUND)
        }else{
            clientObj.setType(this.getOpposite(this.clients[0].type))
        }
        this.clients.push(clientObj)

        return clientObj // pour le client
    }

    removeClient(id){
        let clientId = this.clients.findIndex(client => client.id === id)
        removeItems(this.clients,clientId,1)
    }
}