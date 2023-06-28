const express = require('express')
const server = express()
const PORT = 1234

server.get("/", (request, response) => {
  response.status(200).json({
    message: 'Petición recibida con exito',
  })
})

server.post("cursos/create", (req, res) => {

  console.log(req.body);

  res.status(201).json({
    message: "Petición recibida con éxito",
    code: 201
  })
})

server.delete("cursos/delete", (req, res) => {
  res.status(200).json({
    message: 'Petición recibida con exito'
  })
})

server.patch("cursos/edit", (req, res) => {
  res.status(200).json({
    message: 'Petición recibida con exito'
  })
})

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
})