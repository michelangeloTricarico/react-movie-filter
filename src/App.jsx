import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="card mx-auto text-bg-light">
      <form className="row g-3 mx-auto mt-2">
        <div className="col-auto">
          <input type="film_name" className="form-control" id="film_name" placeholder="Inserire nome film"/>
        </div>
        <div className="col-auto">
          <input type="film_type" className="form-control" id="film_type" placeholder="Inserire tipo film"/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Aggiungi Film</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default App
