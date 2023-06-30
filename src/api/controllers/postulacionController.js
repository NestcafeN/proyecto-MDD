function PostulacionBrigadistaController() { // Definición del controlador
    
    var postulaciones = []; // Array para almacenar las postulaciones
  
    
    this.crearPostulacion = function(postulacion) { // Función para crear una nueva postulación
      postulacion.id = generarIdUnico(); // Generar un identificador único para la postulación
      postulaciones.push(postulacion); // Agregar la postulación al array
    };
  
    
    this.obtenerPostulaciones = function() { // Función para obtener todas las postulaciones
      return postulaciones;
    };
  
    
    this.obtenerPostulacionPorId = function(id) { // Función para obtener una postulación por su identificador
      return postulaciones.find(function(postulacion) {
        return postulacion.id === id;
      });
    };
  
    
    this.actualizarPostulacion = function(id, nuevosDatos) { // Función para actualizar una postulación
      var postulacion = this.obtenerPostulacionPorId(id);
      if (postulacion) {
        Object.assign(postulacion, nuevosDatos); // Actualizar los datos de la postulación con los nuevos datos proporcionados
      }
    };
  
    this.eliminarPostulacion = function(id) { // Función para eliminar una postulación
      var index = postulaciones.findIndex(function(postulacion) {
        return postulacion.id === id;
      });
      if (index !== -1) {
        postulaciones.splice(index, 1); // Eliminar la postulación del array 
      }
    };
  
    
    function generarIdUnico() { // Función para generar un identificador único
      // Implementa aquí la lógica para generar un identificador único
      // Puede ser un número autoincremental, un UUID, etc.
    }
  }
  
  var postulacionBrigadistaController = new PostulacionBrigadistaController();