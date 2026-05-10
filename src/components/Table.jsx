export default function Table({filterFilmList}){
    return(
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
    )
}