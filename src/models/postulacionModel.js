// Importa el módulo 'mongoose' para crear la conexión a la base de datos
const mongoose = require('mongoose');

// Crea el esquema de la colección 'usuarios'
const usuarioSchema = new mongoose.Schema({
nombre: {
    type: String,
    required: true,
    },
apellido: {
    type: String,
    required: true,
    },
telefono: {
    type: String,
    required: true,
    unique: true,
    },
rut: {
    type: String,
    required: true,
    unique: true,
    },
email: {
    type: String,
    required: true,
    unique: true,
  },






});

// Crea el modelo de datos 'Usuario' a partir del esquema 'usuarioSchema'
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Exporta el modelo de datos 'Usuario'
module.exports = Usuario;
