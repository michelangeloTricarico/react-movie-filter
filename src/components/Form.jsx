export default function Form({handleSubmit,setInput,textInput}){
    return(
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
    )
}