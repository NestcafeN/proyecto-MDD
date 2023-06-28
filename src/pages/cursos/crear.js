import styles from "./crear.module.css"

export default function Crear() {

  async function handleCreation(e) {
    e.preventDefault();

    console.log(e);
    // Obtener la info del formulario
    const values = {
      nombre: e.target["0"].value,
      descripcion: e.target["1"].value,
      fecha_inicio: e.target["2"].value,
      fecha_termino: e.target["3"].value,
      cupos: e.target["4"].value

    }
    console.log(values);

    await fetch("http://localhost:1234/cursos/create", {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
  return (
    <div>
      <h1>Creación de un curso</h1>

      <form className={styles.formulario} onSubmit={handleCreation}>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required></input>

        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion" required></textarea>

        <label for="inicio">Horario de inicio:</label>
        <input type="datetime-local" id="inicio" name="inicio" required></input>

        <label for="fin">Horario de término:</label>
        <input type="datetime-local" id="fin" name="fin" required></input>

        <label for="cupos">Cupos:</label>
        <input type="number" id="cupos" name="cupos" min="10" max="50" required></input>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}