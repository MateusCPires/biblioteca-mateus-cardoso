import Header from "./components/Header"
import Formacao from "./components/Formacao"
import Habilidades from "./components/Habilidades"
import Projetos from "./components/Projetos"
import Introducao from "./components/Introducao"
import Tecnologias from "./components/Tecnologias"

function SobreMim(){
  return(
    <div>
      <Header />
      <main>
        <h1>Sobre Mim</h1>
        <Introducao />
        <Tecnologias />
        <Projetos />
        <Formacao />
        <Habilidades />
      </main>
    </div>
  )
}

export default SobreMim