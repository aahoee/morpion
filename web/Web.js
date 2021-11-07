import express from "express";
import http from 'http';
const PUBLIC_FOLDER_NAME = "public"
const VIEWS_FOLDER_NAME = "views"
var app = express();
const server = http.createServer(app);

export default {
    init(){
        this.config()
        this.loadRoutes()

        return server
    },
    config(){
        app.use(express.static(PUBLIC_FOLDER_NAME))
    },
    loadRoutes(){
        app.get('/', (req, res) => {
            res.sendFile(`${process.cwd()}/${VIEWS_FOLDER_NAME}/index.html`)
        });
    },
    listen(){
        server.listen(3000, () => {
            console.log('listening on *:3000');
        });
    }
}