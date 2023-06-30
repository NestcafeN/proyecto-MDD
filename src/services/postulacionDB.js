const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:<password>@cluster0.uxjf4gf.mongodb.net/?retryWrites=true&w=majority')

const Postulante = mongoose.model('Postulante', {
    nombre: String,
    apellido: String,
    rut: String,
    telefono: String,
    email: String,
    fechaNacimiento: Date,
    AntecedenteSalud: String, 
    
});

const crear = async () => {
    const Postulante = new Postulante({
        nombre: 'Juan',
        apellido: 'Perez',
        rut: '8741543-5',
        telefono: '123456789',
        email: 'asd@gmail.com',
        fechaNacimiento: '1999-01-01',
        AntecedenteSalud: 'Ninguno',
    });
}
