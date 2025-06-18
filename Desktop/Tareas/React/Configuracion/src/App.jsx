
import './App.css'
import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';



function App() {
  return (
    
    <>
    <Header title="Creando y usando props" show={false}>

    <h2>Aqui estoy subtitulando el header mediante el prop</h2>

    </Header>

    <Section/>




    </>
  )
}

export default App;