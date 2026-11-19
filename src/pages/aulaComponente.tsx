import Header from '../components/Header'
import CardLivros from '../components/CardLivros'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <CardLivros
        titulo="Dom Casmurro"
        autor="Machado de Assis"
        categoria="Literatura"
      />
    </div>
  )
}

export default App
