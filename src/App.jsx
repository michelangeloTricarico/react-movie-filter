import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Form from './components/Form'
import Select from './components/Select'
import Table from './components/Table'


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
    setTextInput({...textInput, title: "", genere:"" });
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

  function MakeFilterFilm(e){
    let filteredList=[]
    console.log(e.target.value)
    if (e.target.value !== "null"){
      FilmList.forEach((film)=>{
        if (film.genere === e.target.value ){
        filteredList.push(film)}})
    }
    else{
        filteredList = FilmList
    }
    UpdateFilterFilmList(filteredList)
  }

  return (
    <>
    <Form handleSubmit={handleSubmit} setInput={setInput} textInput={textInput} ></Form>
    <Select MakeFilterFilm={MakeFilterFilm} FilterList={FilterList}></Select>
    <Table filterFilmList={filterFilmList}></Table>
    </>
  )
}

export default App
