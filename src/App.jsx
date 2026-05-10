import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const StartFilmList= [{ title: 'Inception', genere: 'Fantascienza' },
   { title: 'Il Padrino', genere: 'Thriller' },
   { title: 'Titanic', genere: 'Romantico' },
   { title: 'Batman', genere: 'Azione' },
  { title: 'Interstellar', genere: 'Fantascienza' },
   { title: 'Pulp Fiction', genere: 'Thriller' },
 ]

function App() {
  const [textInput, setTextInput] = useState({ title: '', genere: '' })
  const [FilmList,UpdateFilmList]=  useState(StartFilmList)
  const [FilterList,setFilterList]= useState([])
  const [filterFilmList,UpdateFilterFilmList]=  useState(StartFilmList)

  function handleSubmit(e){
    e.preventDefault()
    UpdateFilmList([...FilmList,textInput])
    console.log(FilmList)
  }
  
  function setInput(e) {
    if (e.target.name === "title") {
      setTextInput({...textInput, title: e.target.value});
    } else {
      setTextInput({...textInput, genere: e.target.value});
    }
  }

  useEffect(FilterListCreation,["",FilmList])

  function FilterListCreation(){
    const generes=[]
    FilmList.forEach((film)=> {
      if (!generes.includes(film.genere)){
        generes.push(film.genere)
      }
    })
    setFilterList(generes)
    console.log(generes)
  }


  return (
    <>
    <div className="card mx-auto text-bg-light">
      <form className="row g-3 mx-auto mt-2" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input type="film_name" name="title" onChange={setInput} value={textInput.title} className="form-control" id="film_name" placeholder="Inserire nome film"/>
        </div>
        <div className="col-auto">
          <input type="film_type" name="genere" onChange={setInput} value={textInput.genere}  className="form-control" id="film_type" placeholder="Inserire tipo film"/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Aggiungi Film</button>
        </div>
      </form>
    </div>
    <select className="form-select w-auto mx-auto mt-3" aria-label="Default select example">
      <option>Open this select menu</option>
      {FilterList.map((item,index)=>(<option key={index} value={item}>{item}</option>))}
    </select>

    <table className="table table-striped m-2">
      <thead>
        <tr>
          <th scope="col">Film</th>
          <th scope="col">Genere</th>
        </tr>
      </thead>
      <tbody>
      {filterFilmList.map((film,index)=>(
        <tr key={index}>
          <td>{film.title}</td>
          <td>{film.genere}</td>
        </tr>
      ))}
      </tbody>
    </table>
    </>
  )
}

export default App
