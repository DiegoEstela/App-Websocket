const socket = io();

socket.on("message_back", (data) => {
  console.log(data);
  render(data);
  socket.emit("message_client", "gracias, soy el cliente");
});

const render = (data) => {
  let html = data.map((x) => {
    return `  <p> Hola mundo </p>`;
  });

  document.querySelector("#caja").innerHTML = html;
};
