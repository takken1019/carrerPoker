import express from "express";
import http from "http";
import path from "path";
import socketIO from "socket.io";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/game.html'));
    //res.send("hello");
});
const server = http.createServer(app);
const io = socketIO(server);
io.on("connection", (socket) => {
    console.log('a user connected');
})
server.listen(3000, () => {
    console.log('listening on *:3000');
});
