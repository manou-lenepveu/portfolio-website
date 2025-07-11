import Header from './components/Header'
import Hero from './components/Hero'
import './index.css'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              À propos de moi
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Je suis une développeuse passionnée basée à Madagascar, spécialisée dans le développement web moderne. 
              J'aime créer des applications qui combinent design élégant et performance optimale.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App