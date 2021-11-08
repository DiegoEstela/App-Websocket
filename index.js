const express = require("express");
const app = express();
const router = require("./routes/index");
port = 3000;

let msn = [];

// archivos estaticos
app.use(express.static(__dirname + "/public"));
// router
app.use("/api", router);

// server
const http = require("http");
const server = http.createServer(app);

// Socket
const io = require("socket.io")(server);

// conexion Sockect
io.on("connection", (socket) => {
  console.log("Nueva conexion");
  socket.on("message_client", (data) => {
    console.log(data);
  });

  // escuchar data cliente

  socket.on("dataMsn", (data) => {
    msn.push(data);
    // socket.emit("message_back", msn);
    io.sockets.emit("message_back", msn);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
