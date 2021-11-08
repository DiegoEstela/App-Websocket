const socket = io();

const nombre = prompt("Ingrese su nombre");
document.querySelector("#nm").value = nombre;
socket.on("message_back", (data) => {
  console.log(data);
  render(data);
  socket.emit("message_client", "gracias, soy el cliente");
});

const render = (data) => {
  let html = data
    .map((x) => {
      return `  <p> <strong>${x.nombre}</strong> : ${x.msn} </p>`;
    })
    .join(" ");

  document.querySelector("#caja").innerHTML = html;
};

const addInfo = () => {
  let dataObj = {
    nombre: nombre,
    msn: document.querySelector("#msn").value,
  };

  socket.emit("dataMsn", dataObj);

  document.querySelector("#msn").value = "";
  return false;
};
