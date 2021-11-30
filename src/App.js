import react from 'react';
import './App.css';
import MiPrimerComponente from './MiPrimerComponente';
import OtroComponente from './OtroComponente';

function App() {
  return (
    <>
    <h1>Componente Funcional</h1>
    <MiPrimerComponente />
    <h1>Componente Puro</h1>
    <OtroComponente />
    <MiPrimerComponente />
    <OtroComponente />
    </>
    
  );
}

export default App;
