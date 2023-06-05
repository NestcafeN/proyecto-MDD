const express = require('express')
const server = express()
const PORT = 1234

server.get("/", (request, response) => {
  response.status(200).json({
    message: 'Petición recibida con exito',
  })
})


server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
})