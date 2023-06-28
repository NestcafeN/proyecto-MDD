import Link from "next/link"
import styles from "./cursos.module.css"

const tempCursos = [
  {
    nombre: "Primeros Auxilios",
    descripcion: "Curso de primeros auxilios obligatorio para todos los postulantes.",
    horario: "10:00AM - 12:00PM",
    cupos: 30,
    inscritos: 0,
  }
]

export default function Cursos() {
  return (
    <div className={styles.container}>
      <h1>Pagina de Cursos</h1>


      <section>
        {/** Botones para las acciones de los cursos*/}
        <div className={styles.btnContainer}>
          <Link href="/cursos/crear">
            <button className={styles.bPrimary}>Crear un nuevo curso</button>
          </Link>

          <Link href="cursos/editar">
            <button className={styles.bSecondary}>Editar un curso</button>
          </Link>

          <Link href="cursos/eliminar">
            <button className={styles.bDanger}>Eliminar un curso</button>
          </Link>
        </div>

        <div>
          <h2>Cursos en la base de datos:</h2>

          <section className={styles.cursosContainer}>
            {
              tempCursos.map(curso => {
                return (
                  <div>
                    Nombre: {curso.nombre} <br></br>
                    Descripcion: {curso.descripcion} <br></br>
                    Horario: {curso.horario} <br></br>
                    Cupos totales: {curso.cupos} <br></br>
                    Alumnos inscritos: {curso.inscritos} <br></br>
                  </div>
                )
              })
            }
          </section>

        </div>
      </section>
    </div>
  )
}