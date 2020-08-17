import io from "socket.io-client";

window.addEventListener("load", () => {
    const p = document.createElement("p");
    p.textContent = "script is running";
    document.body.appendChild(p);
    const joker = document.createElement("img");
    joker.src = "../images/cards/joker.png";
    document.body.appendChild(joker);
    const socket = io();
    socket.connect();

});