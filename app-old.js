const http = require("http");

http
  .createServer((req, res) => {
    res.write("Esta funcionando el servidor creado");
    res.end();
  })
  .listen(8080)
  .on("error", (err) => {
    console.error("Error en el servidor:", err.message);
  });

console.log("Se escuche en el puerto", 8080);
