const express = require("express");
const app = express();
port = 3000;

// archivos estaticos
app.use(express.static(__dirname + "/public"));

// server
const http = require("http");
const server = http.createServer(app);

// Socket
const io = require("socket.io")(server);

// conexion Sockect
io.on("connection", (socket) => {
  socket.emit("message_back", "Hola soy el back");
  console.log("Nueva conexion");
  socket.on("message_client", (data) => {
    console.log(data);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
