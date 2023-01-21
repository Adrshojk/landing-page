import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main-container'

function App() {
  return (
    <div className="flex flex-col max-w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
